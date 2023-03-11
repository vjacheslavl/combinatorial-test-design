import { TestDesign } from '../domain/TestDesign';
import { TestDesignResponse } from '../domain/TestDesignResponse';
import { TestDesignRepository } from '../repository/testDesign.repository';
import { AttributeService } from './attribute.service';

export class TestDesignService {
	private testDesignRepository: TestDesignRepository;
	private attributeService: AttributeService;

	constructor() {
		this.testDesignRepository = new TestDesignRepository();
		this.attributeService = new AttributeService();
	}

	async getTestDesign(id: string) {
		const design = await this.testDesignRepository.getTestDesign(id);
		if (design) {
			const designResponse: TestDesignResponse = {
				_id: design._id,
				name: design.name,
				attributes: await this.attributeService.getAttributes(design._id)
			};
			return designResponse;
		} else {
			return null;
		}
	}

	async getTestDesigns() {
		const tesDesigns = await this.testDesignRepository.getTestDesigns();

		const response = tesDesigns.map(async design => {
			const designResponse: TestDesignResponse = {
				_id: design._id,
				name: design.name,
				attributes: await this.attributeService.getAttributes(design._id)
			};
			return designResponse;
		});

		console.log(response);
		return Promise.all(response);
	}

	async createTestDesign(testDesign: TestDesign) {
		return await this.testDesignRepository.createTestDesign(testDesign);
	}

	async updateTestDesign(update: any) {
		return await this.testDesignRepository.updateTestDesign(update);
	}

	async deleteTestDesigns(designIds: string[]) {
		return await this.testDesignRepository.deleteTestDesign(designIds);
	}
}
