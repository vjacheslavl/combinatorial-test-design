import { Attribute } from '../domain/TestDesign';
import { AttributeResponse } from '../domain/TestDesignResponse';
import { AttributeRepository } from '../repository/attribute.repository';
import { ValueService } from './value.service';

export class AttributeService {
	private attributeRepository: AttributeRepository;
    private valueService: ValueService;

	constructor() {
		this.attributeRepository = new AttributeRepository();
        this.valueService = new ValueService();
	}

	async getAttribute(id: string) {
		return await this.attributeRepository.getAttribute(id);
	}

	async getAttributes(designId: string): Promise<AttributeResponse[]> {
		const attributes = await this.attributeRepository.getAttributes(designId);

		const response = attributes.map(async attribute => {
			const attributeResponse: AttributeResponse = {
				_id: attribute._id,
				designId: attribute.designId,
				name: attribute.name,
				values: (await this.valueService.getValues(attribute._id))
			};
			return attributeResponse;
		});
		return Promise.all(response)
	}

	async createAttribute(Attribute: Attribute) {
		return await this.attributeRepository.createAttribute(Attribute);
	}

	async updateAttribute(attributeId: string) {
		return await this.attributeRepository.updateAttribute(attributeId);
	}

	async deleteAttribute(attributeId: string) {
		return await this.attributeRepository.deleteAttribute(attributeId);
	}
}
