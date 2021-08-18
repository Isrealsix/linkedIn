import React, { useState, useEffect } from 'react';
import {
	CalendarViewDay,
	Create,
	EventNote,
	Image,
	Subscriptions,
} from '@material-ui/icons';
import './Feed.scss';
import InputOption from './inputOption/InputOption';
import Post from './post/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [message, setMessage] = useState('');
	const user = useSelector(selectUser);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot(snapshot =>
				setPosts(
					snapshot.docs.map(doc => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = ev => {
		ev.preventDefault();
		db.collection('posts').add({
			name: user.displayName,
			description: user.email,
			message: message,
			photoUrl: user.photoUrl || '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setMessage('');
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input
							type="text"
							value={message}
							onChange={ev => setMessage(ev.target.value)}
						/>
						<button type="submit" onClick={sendPost}>
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={Image} title="Photo" color="#70b5f9" />
					<InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
					<InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
					<InputOption
						Icon={CalendarViewDay}
						title="Write article"
						color="#7FC15E"
					/>
				</div>
			</div>
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
		</div>
	);
};

export default Feed;
