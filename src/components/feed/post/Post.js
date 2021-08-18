import { Avatar } from '@material-ui/core';
import {
	ChatOutlined,
	SendOutlined,
	ShareOutlined,
	ThumbUpAltOutlined,
} from '@material-ui/icons';
import InputOption from '../inputOption/InputOption';
import './Post.scss';

const Post = ({ name, description, message, photoUrl }) => {
	return (
		<div className="post">
			<div className="post__header">
				<Avatar />
				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className="post__body">
				<p>{message}</p>
			</div>

			<div className="post__buttons">
				<InputOption Icon={ThumbUpAltOutlined} title="Like" color="grey" />

				<InputOption Icon={ChatOutlined} title="Comment" color="grey" />

				<InputOption Icon={ShareOutlined} title="Share" color="grey" />

				<InputOption Icon={SendOutlined} title="Send" color="grey" />
			</div>
		</div>
	);
};

export default Post;
