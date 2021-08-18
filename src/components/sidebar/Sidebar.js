import { Avatar } from '@material-ui/core';
import './Sidebar.scss';

const Sidebar = () => {
	const recentItem = topic => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.pexels.com/photos/7719014/pexels-photo-7719014.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
					alt=""
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Israel Ojeifo</h2>
				<h4>You are watching a Master at work!</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">2,300</p>
				</div>

				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">1,300</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('frontend')}
				{recentItem('backend')}
				{recentItem('nodejs')}
				{recentItem('fullstack')}
			</div>
		</div>
	);
};

export default Sidebar;
