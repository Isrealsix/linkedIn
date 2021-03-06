import { Avatar } from '@material-ui/core';
import './HeaderOption.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
	const user = useSelector(selectUser);
	// console.log(user && user.email[0]);
	return (
		<div className="headerOption" onClick={onClick}>
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && (
				<Avatar className="headerOption__icon" src={user?.photoUrl}>
					{user && user?.email[0]}
				</Avatar>
			)}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
};

export default HeaderOption;
