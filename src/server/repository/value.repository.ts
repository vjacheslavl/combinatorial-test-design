import { Value } from '../domain/TestDesign';
import { ValueResponse } from '../domain/TestDesignResponse';
import { ValueModel } from '../models/testDesign';

export class ValueRepository {
	async getValues(attributeId: string) {
		const Value = await ValueModel.find({ attributeId: attributeId });
		return Value;
	}

	async getValue(id: string): Promise<Value | undefined> {
		const Value = await ValueModel.find({ _id: id });
		if (Value) {
			return Value[0];
		}
	}

	async createValue(value: Value) {
		let data = {};
		try {
			data = await ValueModel.create(value);
		} catch (err) {
			console.error('Error::' + err);
		}
		return data;
	}

	async deleteValue(valueId: string) {
		try {
			await ValueModel.deleteOne({ _id: valueId });
		} catch (err) {
			console.error('Error::' + err);
		}
	}

	async updateValue(updatedValue: ValueResponse) {
		const updateResponse = await ValueModel.findById(updatedValue._id, function (err, value) {
			if (!err) {
				value.type = updatedValue.type;
				value.save(function (err) {
					console.log(err);
				});
			}
		});
		return updateResponse
	}
}
