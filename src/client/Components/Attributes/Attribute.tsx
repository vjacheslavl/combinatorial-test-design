import React from 'react';
import { AttributeResponse } from '../../../server/domain/TestDesignResponse';
import ValueList from './Values/ValueList';
import DeleteButton from '../Common/DeleteButton';

const Attribute: React.FC<{
	item: AttributeResponse;
	onSaveValue: (attributeId: string, name: string) => any;
}> = props => {
	const saveValueHandler = name => {
		props.onSaveValue(props.item._id, name);
	};

    const deleteAttributeHandler = () => {
		console.log(props.item._id)
	};

	return (
		<div>
			<div className="attribute">
				<p>{props.item.name}</p>
				<DeleteButton onDelete={deleteAttributeHandler} />
			</div>
			<ValueList content={props.item.values} onSaveValue={saveValueHandler} />
		</div>
	);
};

export default Attribute;
