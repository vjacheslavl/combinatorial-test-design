import { Document } from 'mongoose';

// don't forget to update src/server/models/
export interface TestDesign extends Document {
	name: string;
}

export interface Attribute extends Document {
	designId: string;
	name: string;
}

export interface Value extends Document {
	attributeId: string;
	name: string;
	type: string;
}
