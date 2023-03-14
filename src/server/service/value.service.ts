import { Value } from '../domain/TestDesign';
import { ValueResponse } from '../domain/TestDesignResponse';
import { ValueRepository } from '../repository/value.repository';

export class ValueService {

    private ValueRepository: ValueRepository;

    constructor() {
        this.ValueRepository = new ValueRepository();
    }

    async getValue(id: string) {
        return await this.ValueRepository.getValue(id);
    }

    async getValues(attributeId: string): Promise<ValueResponse[]> {
        const values = await this.ValueRepository.getValues(attributeId);
        const response = values.map(value => {
            const valueResponse: ValueResponse = {
                _id: value._id,
                attributeId: value.attributeId,
                name: value.name,
                type: value.type
            }
            return valueResponse;
        })
        return response;
    }

    async createValue(value: Value) {
        return await this.ValueRepository.createValue(value);
    }

    async updateValue(value: ValueResponse) {
        return await this.ValueRepository.updateValue(value);
    }

    async deleteValue(valueId: string) {
        return await this.ValueRepository.deleteValue(valueId);
    }

    async deleteValues(attributeId: string) {
        const values = await this.ValueRepository.getValues(attributeId);
        for(const value of values) {
            await this.deleteValue(value._id);
        }
    }
}