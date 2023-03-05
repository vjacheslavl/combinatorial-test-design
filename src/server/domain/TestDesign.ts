import { Document } from 'mongoose';

// don't forget to update src/server/models/
export interface TestDesign extends Document {
	name: string;
	attributes: Attribute[];
	version: string;
}

export interface Attribute extends Document {
	name: string;
	values: Value[];
}

export interface Value extends Document {
	name: string;
	type: string;
}
