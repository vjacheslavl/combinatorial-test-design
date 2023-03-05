import React from 'react';

const DeleteButton: React.FC<{
      onDelete: () => any;
}> = props => {
	return (
		<div className="circle-btn" onClick={props.onDelete}>
			<span className="circle-btn-text">x</span>
		</div>
	);
};

export default DeleteButton;
