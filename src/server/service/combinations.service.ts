import { Attribute, Value } from '../domain/TestDesign';
import { AttributeRepository } from '../repository/attribute.repository';
import { ValueRepository } from '../repository/value.repository';


type Combination = {
    name: string,
    values: Map<string, Value>
    //values: [string, Value][]
}

const HAPPY_PATH = "happyPath"

export class CombinationsService {

    private attributeRepository: AttributeRepository;
    private valueRepository: ValueRepository;
    

    constructor() {
        this.attributeRepository = new AttributeRepository();
        this.valueRepository = new ValueRepository();
    }

    async generateCombinations(id: string) {
        //first generate Happy Path generation
        const generatedCombinations: Combination[] = []

        const allAttributes = await this.attributeRepository.getAttributes(id);
        
        const happyPathCombination = await this.createHappyPathCombination(allAttributes)


        generatedCombinations.push(happyPathCombination)

        //then generate all combinations from it by rotating each attribute one by one
        for (const attribute of allAttributes) {
            
            const values = await this.valueRepository.getValues(id);
            //Rotate only non happy path values
            for (const value of values.filter((i)=>i.type!=HAPPY_PATH)) {

                //name is a purpose of the test combination
                const anotherCombination = { name: `When ${attribute.name} is ${value.name}`, values: new Map(happyPathCombination.values) }                            

                anotherCombination.values.set(attribute.name,value)
                generatedCombinations.push(anotherCombination)
            }
        }

    

        return generatedCombinations

    }


    private async createHappyPathCombination(attributes: Attribute[]): Promise<Combination> {

        const result = new Map<string, Value>()

        for (const attribute of attributes)
        {
            const values = await this.valueRepository.getValues(attribute._id);
            const happyPathValue: Value = values.find((item)=> item.type=== HAPPY_PATH) as Value
            result.set(attribute.name, happyPathValue)
        }

        return {
            name: "Happy path",
            values: result
        }

    }
}