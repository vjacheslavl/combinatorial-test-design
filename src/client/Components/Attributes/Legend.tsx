import React from 'react';

['positive', 'happyPath', 'negative'];

const Legend: React.FC = () => {
	return (
		<div>
			<br />
			<div className="values-container">
				<h4>Legend</h4>
				<div className={`valueItem positive`}>Positive values</div>
				<div className={`valueItem happyPath`}>Happy Path values</div>
				<div className={`valueItem negative`}>Negative values</div>
			</div>
		</div>
	);
};

export default Legend;
