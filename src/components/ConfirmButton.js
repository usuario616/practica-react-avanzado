import React from 'react';
import ConfirmationPanel from './ConfirmationPanel.js';

export const ConfirmButton = ({ iconButton, titleButton, okAction, message, subtitle }) => {
	const [isVisible, setIsVisible] = React.useState(false);

	const showConfirmationPanel = () => {
		setIsVisible(true);
	};

	const hideConfirmationPanel = () => {
		setIsVisible(false);
	};

	const confirms = () => {
		okAction();
		hideConfirmationPanel();
	};

	const cancels = () => {
		hideConfirmationPanel();
	};
	return (
		<>
			<button className='delete-button' onClick={showConfirmationPanel}>
				{iconButton ? <img src={iconButton} width='14' alt='logout' /> : ''}
				{titleButton}
			</button>
			{isVisible && (
				<ConfirmationPanel
					okAction={confirms}
					cancelAction={cancels}
					message={message}
					subtitle={subtitle}
				/>
			)}
		</>
	);
};

export default ConfirmButton;
