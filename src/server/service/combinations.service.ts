import { Attribute, TestDesign, Value } from '../domain/TestDesign';
import { TestDesignRepository } from '../repository/testDesign.repository';


type Combination = {
    name: string,
    values: Map<string, Value>
    //values: [string, Value][]
}

const HAPPY_PATH = "happyPath"

export class CombinationsService {

    private testDesignRepository: TestDesignRepository;

    constructor() {
        this.testDesignRepository = new TestDesignRepository();
    }

    async generateCombinations(id: string) {
        const testDesign = await this.testDesignRepository.getTestDesign(id);

        //first generate Happy Path generation
        const generatedCombinations: Combination[] = []

        const allAttributes = testDesign?.attributes as Attribute[]
        const happyPathCombination = this.createHappyPathCombination(allAttributes)


        generatedCombinations.push(happyPathCombination)

        //then generate all combinations from it by rotating each attribute one by one
        for (const attribute of allAttributes) {
            
            //Rotate only non happy path values
            for (const value of attribute.values.filter((i)=>i.type!=HAPPY_PATH)) {

                //name is a purpose of the test combination
                let anotherCombination = { name: `When ${attribute.name} is ${value.name}`, values: new Map(happyPathCombination.values) }                            

                anotherCombination.values.set(attribute.name,value)
                generatedCombinations.push(anotherCombination)
            }
        }

    

        return generatedCombinations

    }


    private createHappyPathCombination(attributes: Attribute[]): Combination {

        const result = new Map<string, Value>()

        for (const attribute of attributes)
        {
            const happyPathValue: Value = attribute.values.find((item)=> item.type=== HAPPY_PATH) as Value
            result.set(attribute.name, happyPathValue)
        }

        return {
            name: "Happy path",
            values: result
        }

    }
}