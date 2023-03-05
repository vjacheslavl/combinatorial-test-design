import { TestDesign } from '../domain/TestDesign';
import { TestDesignService } from '../service/testDesign.service';

export class TestDesignController {
	private testDesignService: TestDesignService;

	constructor() {
		this.testDesignService = new TestDesignService();
	}

	async getTestDesign(id: string) {
		console.log('Controller: getTestDesign', id);
		return await this.testDesignService.getTestDesign(id);
	}

	async getTestDesigns() {
		console.log('Controller: getTestDesigns');
		return await this.testDesignService.getTestDesigns();
	}

	async createTestDesign(testDesign: TestDesign) {
		console.log('Controller: createTestDesign', testDesign);
		return await this.testDesignService.createTestDesign(testDesign);
	}

	async updateTestDesign(update: any) {
		console.log('Controller: updateTestDesign', update);
		return await this.testDesignService.updateTestDesign(update);
	}

	async deleteTestDesigns(testDesignIds: string[]) {
		console.log('Controller: deleteTestDesigns', testDesignIds);
		return await this.testDesignService.deleteTestDesigns(testDesignIds);
	}
}
