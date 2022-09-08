import { TestDesign } from '../domain/TestDesign';
import { TestDesignRepository } from '../repository/testDesign.repository';

export class TestDesignService {

    private testDesignRepository: TestDesignRepository;

    constructor() {
        this.testDesignRepository = new TestDesignRepository();
    }

    async getTestDesign(id: string) {
        return await this.testDesignRepository.getTestDesign(id);
    }

    async getTestDesigns() {
        return await this.testDesignRepository.getTestDesigns();
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