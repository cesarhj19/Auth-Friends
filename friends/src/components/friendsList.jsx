import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';
import Friend from './friend';
import AddFriend from './addFriend';

const FriendsList = props => {
	const [friends, setFriends] = useState([]);
	const [update, setUpdate] = useState(0);

	useEffect(() => {
		const getFriends = () => {
			axiosWithAuth()
				.get('http://localhost:5000/api/friends')
				.then(res => {
					setFriends(res.data);
				})
				.catch(res => {
					console.log(res);
				});
		};
		getFriends();
	}, [update]);

	return (
		<div>
			<h1>Friends</h1>
			<AddFriend update={update} setUpdate={setUpdate} />
			<ul>
				{friends.map((friend, index) => {
					return <Friend key={index} friend={friend} />;
				})}
			</ul>
		</div>
	);
};

export default FriendsList;
