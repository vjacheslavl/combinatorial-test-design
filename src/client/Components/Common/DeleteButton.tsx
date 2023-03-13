import React from 'react';

const DeleteButton: React.FC<{
      onDelete: () => any;
}> = props => {
	return (
		<div className="circle-btn" onClick={props.onDelete}>x</div>
	);
};

export default DeleteButton;
