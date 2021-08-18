import './App.scss';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/login/Login';

function App() {
	const user = useSelector(selectUser);
	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Feed />
				</div>
			)}
		</div>
	);
}

export default App;
