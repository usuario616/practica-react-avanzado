import React from 'react';

const ConfirmationPanel = ({ okAction, cancelAction, message, subtitle }) => {
	return (
		<div
			style={{
				backgroundColor: 'pink',
				width: 300,
				left: '50%',
				zIndex: 3,
				position: 'absolute',
				marginLeft: '-150px',
				padding: 10,
				borderStyle: 'solid',
				borderRadius: '20px',
				borderWidth: '2px',
				borderColor: 'red',
			}}
		>
			<div style={{ paddingBottom: 10, fontSize: 19, textAlign: 'center' }}>
				{message}
				<br />
				<span style={{ fontSize: 10, textAlign: 'center' }}>{subtitle}</span>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
				}}
			>
				<button onClick={cancelAction}>Cancel</button>
				<button className='delete-button-panel' onClick={okAction}>
					Sure
				</button>
			</div>
		</div>
	);
};

export default ConfirmationPanel;
