// import Button from './components/button/Button';
import { USERS } from './constants/infoUsers';
import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import MyButton from './components/button/Button';

const App = () => {
	const [userAccount, setUserAccount] = useState(0);
	console.log(userAccount);
	return (
		<div>
			<GlobalStyles />
			<img src={USERS[userAccount].profileImage} alt='' />
			<h1>
				Name: {USERS[userAccount].title} {USERS[userAccount].name}
			</h1>
			<p>Username: {USERS[userAccount].username}</p>
			<p>Email: {USERS[userAccount].email}</p>
			<MyButton
				// disabled={!userAccount}
				direction='Previous'
				USERS={USERS}
				userAccount={userAccount}
				setUserAccount={setUserAccount}
			>
				Previous
			</MyButton>
			<MyButton
				// disabled={userAccount === USERS.length - 1}
				direction='Next'
				USERS={USERS}
				userAccount={userAccount}
				setUserAccount={setUserAccount}
			>
				Next
			</MyButton>
		</div>
	);
};

export default App;

// <button
// 				// disabled={userAccount === 0}
// 				disabled={!userAccount}
// 				onClick={() => {
// 					if (userAccount > 0) {
// 						setUserAccount(userAccount - 1);
// 					}
// 				}}
// 			>
// 				Previous
// 			</button>
// 			<button
// 				disabled={userAccount >= USERS.length - 1}
// 				onClick={() => {
// 					if (userAccount < USERS.length - 1) {
// 						setUserAccount(userAccount + 1);
// 					}
// 				}}
// 			>
// 				Next
// 			</button>
