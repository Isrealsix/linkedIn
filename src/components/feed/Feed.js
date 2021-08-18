import React, { useState } from 'react';
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

const Feed = () => {
	const [posts, setPosts] = useState([]);

	const sendPost = ev => {
		ev.preventDefault();
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<Create />
					<form>
						<input type="text" />
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
			{posts.map(map => (
				<Post
					name="Israel Ojeifo"
					description="From the boss"
					message="You are watching a master at work"
				/>
			))}
			<Post
				name="Israel Ojeifo"
				description="From the boss"
				message="You are watching a master at work"
			/>
		</div>
	);
};

export default Feed;
