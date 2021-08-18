import React, { useState } from 'react';
import { auth } from '../../firebase';
import './Login.scss';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../features/userSlice';

const Login = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [photoUrl, setPhotoUrl] = useState('');
	const dispatch = useDispatch();

	const registerNow = () => {
		if (!name) {
			return alert('Please provide your full name');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then(userAuth => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: photoUrl,
					})
					.then(() => {
						dispatch(
							setLogin({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: photoUrl,
							})
						);
					});
			})
			.catch(error => {
				alert(error);
			});
	};

	const signIn = ev => {
		ev.preventDefault();
	};

	const handleChange = ev => {
		const type = ev.target.dataset.type;
		const value = ev.target.value;
		if (type === 'fullname') {
			setName(value);
		}
		if (type === 'email') {
			setEmail(value);
		}
		if (type === 'password') {
			setPassword(value);
		}

		if (type === 'photo') {
			setPhotoUrl(value);
		}
	};

	return (
		<div className="login">
			<img
				src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
				alt=""
			/>

			<form>
				<input
					placeholder="Enter Full name when registering"
					type="text"
					data-type="fullname"
					value={name}
					onChange={handleChange}
				/>

				<input
					placeholder="Profile pic URL (optional)"
					type="text"
					data-type="photo"
					value={photoUrl}
					onChange={handleChange}
				/>

				<input
					placeholder="Enter Email"
					type="email"
					data-type="email"
					value={email}
					onChange={handleChange}
				/>

				<input
					type="password"
					data-type="password"
					placeholder="Enter password"
					value={password}
					onChange={handleChange}
				/>

				<button type="submit" onClick={signIn}>
					Sign In
				</button>
			</form>

			<p>
				Not a member?{' '}
				<span className="login__register" onClick={registerNow}>
					Register Now
				</span>
			</p>
		</div>
	);
};

export default Login;
