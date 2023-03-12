import React from 'react';
import { AttributeResponse } from '../../../server/domain/TestDesignResponse';
import ValueList from './Values/ValueList';
import DeleteButton from '../Common/DeleteButton';
import { apiRoute } from '../../utils';
import { Delete } from '../../Services';

const Attribute: React.FC<{
	item: AttributeResponse;
	onSaveValue: (attributeId: string, name: string) => any;
	onDelete: (attributeId: string) => any;
}> = props => {
	const saveValueHandler = name => {
		props.onSaveValue(props.item._id, name);
	};


	const deleteAttributeHandler = () => {
		props.onDelete(props.item._id);
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
