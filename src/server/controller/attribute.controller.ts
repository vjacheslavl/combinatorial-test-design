import { Attribute } from '../domain/TestDesign';
import { AttributeService } from '../service/attribute.service';
import { ValueService } from '../service/value.service';

export class AttributeController {
	private AttributeService: AttributeService;
	private ValueService: ValueService;

	constructor() {
		this.AttributeService = new AttributeService();
		this.ValueService = new ValueService();
	}

	async getAttribute(id: string) {
		console.log('Controller: getAttribute', id);
		return await this.AttributeService.getAttribute(id);
	}

	async getAttributes(testDesignId: string) {
		console.log('Controller: getAttributes');
		return await this.AttributeService.getAttributes(testDesignId);
	}

	async createAttribute(Attribute: Attribute) {
		console.log('Controller: createAttribute', Attribute);
		return await this.AttributeService.createAttribute(Attribute);
	}

	async updateAttribute(update: any) {
		console.log('Controller: updateAttribute', update);
		return await this.AttributeService.updateAttribute(update);
	}

	async deleteAttributes(attributeId: string) {
		console.log('Controller: deleteAttributes', attributeId);

		await this.ValueService.deleteValues(attributeId);
		return await this.AttributeService.deleteAttribute(attributeId);
	}
}
