import React from 'react';
import { Route } from 'react-router';
import { Reset } from 'styled-reset';
import Login from './components/login';
import FriendsList from './components/friendsList';
import PrivateRoute from './util/privateRoute';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Reset />
			<Route exact path='/' component={Login} />
			<PrivateRoute path='/friendsList' component={FriendsList} />
		</div>
	);
}

export default App;
