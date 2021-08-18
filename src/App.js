import { useEffect } from 'react';
import './App.scss';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setLogin, setLogout } from './features/userSlice';
import Login from './components/login/Login';
import { auth } from './firebase';
import Widget from './components/widget/Widget';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// Logged in
				dispatch(
					setLogin({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				// Not logged in
				dispatch(setLogout());
			}
		});
	}, [dispatch]);
	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Feed />
					<Widget />
				</div>
			)}
		</div>
	);
}

export default App;
