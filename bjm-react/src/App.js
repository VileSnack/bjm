import './App.css';
import Login from './Login';
import TopBar from './TopBar';
import { useState } from 'react';

function App()
{
	const [userID, setUserID] = useState(-1);
	const [tab, setTab] = useState('login');

	function loginUser(newUserID)
	{
		setUserID(newUserID);
	}

	return (
		<div className="App">
			<TopBar userID={userID}/>
			{
				(tab == 'home') ? (<span>The home page would go here.</span>)
				: (tab == 'profile') ? (<span>The profile page would go here.</span>)
				: (<Login />)
			}
		</div>
	);
}

export default App;
