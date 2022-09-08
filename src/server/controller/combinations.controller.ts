import { Combination } from '../domain/Combinations';
import { CombinationsService } from '../service/combinations.service';


export class CombinationsController {

    private combinationsService: CombinationsService;

    constructor() {
        this.combinationsService = new CombinationsService();
    }

    async getCombinations(id: string) {
        console.log('Controller: getCombinations', id)
        const result = await this.combinationsService.generateCombinations(id);


        return result.map((i) => {
            return {
                name: i.name,
                values: [...i.values] //JSON is not able to work with Map - need to convert to array
            } as Combination
        })
    }
}