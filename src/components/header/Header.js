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

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
					alt=""
				/>

				<div className="header__search">
					<Search />
					<input type="text" />
				</div>
			</div>

			<div className="header__right">
				<HeaderOption Icon={Home} title="Home" />
				<HeaderOption Icon={SupervisorAccount} title="My Network" />
				<HeaderOption Icon={BusinessCenter} title="Jobs" />
				<HeaderOption Icon={Chat} title="Messaging" />
				<HeaderOption Icon={Notifications} title="Notifications" />
				<HeaderOption
					avatar="https://images.pexels.com/photos/3277802/pexels-photo-3277802.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
					title="Me"
				/>
			</div>
		</div>
	);
};

export default Header;
