import React, { useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

const AddFriend = props => {
	const [friend, setFriend] = useState({});

	const handleChange = e => {
		setFriend({
			...friend,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(friend);
		axiosWithAuth()({
			url: 'http:localhost:5000/api/friends',
			method: 'POST',
			data: friend,
			id: friend.id
		})
			.then(res => {
				console.log(res.data);
			})
			.catch(res => {
				console.log(res);
			});

		let count = props.update;
		props.setUpdate(count++);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} placeholder='Name' name='name' />
				<input onChange={handleChange} placeholder='Age' name='age' />
				<input onChange={handleChange} placeholder='Email' name='email' />
				<button type='submit'>Add Friend</button>
			</form>
		</div>
	);
};

export default AddFriend;
