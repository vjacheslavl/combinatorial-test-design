export interface TestDesignResponse {
	_id: string;
	name: string;
	attributes: AttributeResponse[];
}

export interface AttributeResponse {
	_id: string;
	designId: string;
	name: string;
	values: ValueResponse[]
}

export interface ValueResponse {
	_id: string;
	attributeId: string;
	name: string;
	type: string;
}