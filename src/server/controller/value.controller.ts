import { Value } from '../domain/TestDesign';
import { ValueResponse } from '../domain/TestDesignResponse';
import { ValueService } from '../service/value.service';

export class ValueController {
	private ValueService: ValueService;

	constructor() {
		this.ValueService = new ValueService();
	}

	async getValue(id: string) {
		console.log('Controller: getValue', id);
		return await this.ValueService.getValue(id);
	}

	async getValues(attributeId: string) {
		console.log('Controller: getValues');
		return await this.ValueService.getValues(attributeId);
	}

	async createValue(value: Value) {
		console.log('Controller: createValue', value);
		return await this.ValueService.createValue(value);
	}

	async updateValue(update: ValueResponse) {
		console.log('Controller: updateValue', update);
		return await this.ValueService.updateValue(update);
	}

	async deleteValues(valueId: string) {
		console.log('Controller: deleteValue', valueId);
		return await this.ValueService.deleteValue(valueId);
	}
}
