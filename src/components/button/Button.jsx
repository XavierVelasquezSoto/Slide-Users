// import { USERS } from '../../constants/infoUsers';
import { StyledButton } from './button.styles';

const MyButton = ({
	// disabled,
	direction,
	USERS,
	userAccount,
	setUserAccount,
	children
}) => {
	// console.log(color);
	const disabledOption =
		(direction === 'Previous' && userAccount === 0) ||
		(direction === 'Next' && userAccount === USERS.length - 1);
	return (
		<StyledButton
			// disabled={disabled}
			disabled={disabledOption}
			onClick={() => {
				if (direction === 'Previous' && userAccount > 0) {
					setUserAccount(userAccount - 1);
				} else if (direction === 'Next' && userAccount < USERS.length - 1) {
					setUserAccount(userAccount + 1);
				}
			}}
		>
			{children}
		</StyledButton>
	);
};

export default MyButton;

// const disabledOption =
// 	(direction === 'Previous' && userAccount > 0) ||
// 	(direction === 'Next' && userAccount <= USERS.length - 1);
