// import Button from './components/button/Button';
import { USERS } from './constants/infoUsers';
import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [userAccount, setUserAccount] = useState(0);
	return (
		<div>
			<GlobalStyles />
			<img src={USERS[userAccount].profileImage} alt='' />
			<h1>
				Name: {USERS[userAccount].title} {USERS[userAccount].name}
			</h1>
			<p>Username: {USERS[userAccount].username}</p>
			<p>Email: {USERS[userAccount].email}</p>
			<button
				// disabled={userAccount === 0}
				disabled={!userAccount}
				onClick={() => {
					if (userAccount > 0) {
						setUserAccount(userAccount - 1);
					}
				}}
			>
				Previous
			</button>
			<button
				disabled={userAccount >= USERS.length - 1}
				onClick={() => {
					if (userAccount < USERS.length - 1) {
						setUserAccount(userAccount + 1);
					}
				}}
			>
				Next
			</button>
		</div>
	);
};

export default App;
