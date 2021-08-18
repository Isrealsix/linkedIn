import './Header.scss';
import {
	BusinessCenter,
	Chat,
	Home,
	Notifications,
	Search,
	SupervisorAccount,
} from '@material-ui/icons';
import HeaderOption from './headerOption/HeaderOption';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
	const dispatch = useDispatch();

	const handleSignout = () => {
		// console.log('supposed to sign out');
		dispatch(setLogout());
		auth.signOut();
	};

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
					alt=""
				/>

				<div className="header__search">
					<Search />
					<input type="text" placeholder="Search" />
				</div>
			</div>

			<div className="header__right">
				<HeaderOption Icon={Home} title="Home" />
				<HeaderOption Icon={SupervisorAccount} title="My Network" />
				<HeaderOption Icon={BusinessCenter} title="Jobs" />
				<HeaderOption Icon={Chat} title="Messaging" />
				<HeaderOption Icon={Notifications} title="Notifications" />
				<HeaderOption avatar={true} title="Me" onClick={handleSignout} />
			</div>
		</div>
	);
};

export default Header;
