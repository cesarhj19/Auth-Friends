import React, { useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

const Login = props => {
	const [credentials, setCredentials] = useState({
		username: 'Lambda School',
		password: 'i<3Lambd4'
	});

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('http://localhost:5000/api/login', credentials)
			.then(res => {
				console.log(res.data);
				localStorage.setItem('token', res.data.payload);
				props.history.push('/friendsList');
			})
			.catch(res => {
				console.log(res);
			});
	};

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} placeholder='username' name='username' />
				<input onChange={handleChange} placeholder='password' name='password' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
