import { Attribute } from '../domain/TestDesign';
import { AttributeModel } from '../models/testDesign';

export class AttributeRepository {
	async getAttributes(designId: string) {
		const attributes = await AttributeModel.find({ designId: designId });
		return attributes;
	}

	async getAttribute(id: string): Promise<Attribute | undefined> {
		const attribute = await AttributeModel.find({ _id: id });
		if (attribute) {
			return attribute[0];
		}
	}

	async createAttribute(attribute: Attribute) {
		let data = {};
		try {
			data = await AttributeModel.create(attribute);
		} catch (err) {
			console.error('Error::' + err);
		}
		return data;
	}

	async deleteAttribute(attributeId: string) {
		try {
			await AttributeModel.deleteOne({ _id: attributeId });
		} catch (err) {
			console.error('Error::' + err);
		}
	}

	async updateAttribute(attributeId: string) {
		AttributeModel.updateOne({ _id: attributeId });
	}
}
