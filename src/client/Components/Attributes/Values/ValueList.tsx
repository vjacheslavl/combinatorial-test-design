import React from 'react';
import ValueItem from './ValueItem';
import AddNewValue from './AddNewValue';
import { ValueResponse } from '../../../../server/domain/TestDesignResponse';

const ValueList: React.FC<{
	content: ValueResponse[];
	onSaveValue: (name: string) => any;
	onDeleteValue: (valueId: string) => any;
}> = props => {
	return (
		<div>
			<div className="values-container">
				{props.content.map(item => (
					<ValueItem key={item._id} content={item} canDelete={true} onDeleteValue={props.onDeleteValue} />
				))}
			</div>
                  <AddNewValue onSave={props.onSaveValue} />
			<hr />
		</div>
	);
};

export default ValueList;
