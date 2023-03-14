import React, { useState } from 'react';
import { ValueResponse } from '../../../../server/domain/TestDesignResponse';
import { Put } from '../../../Services';
import { apiRoute } from '../../../utils';
import DeleteButton from '../../Common/DeleteButton';

const valueTypes = ['positive', 'happyPath', 'negative'];

const ValueItem: React.FC<{
	content: ValueResponse;
	onDeleteValue: (valueId: string) => any;
	canDelete: boolean;
}> = props => {
	const [valueType, setValueType] = useState(valueTypes.indexOf(props.content.type));

	const setValueTypeHandler = async (): Promise<void> => {
		const changedValue = valueType + 1 == 3 ? 0 : valueType + 1;
		try {
			await Put(apiRoute.getRoute('values'), {
				_id: props.content._id,
				attributeId: props.content.attributeId,
				name: props.content.name,
				type: valueTypes[changedValue]
			});
			setValueType(changedValue);
		} catch (e) {
			console.log(e);
		}
	};

	const deleteValueHandler = () => {
		props.onDeleteValue(props.content._id);
	};

	return (
		<div>
			<div className={`valueItem ${valueTypes[valueType]}`} onClick={setValueTypeHandler}>
				{props.content.name}
			</div>
			{props.canDelete && <DeleteButton onDelete={deleteValueHandler} />}
		</div>
	);
};

export default ValueItem;
