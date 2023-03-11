import Database from '../dbConfigs';
import { Schema } from 'mongoose';
import { Attribute, TestDesign, Value } from '../domain/TestDesign';

const {
	mongo: { model }
} = Database;

const TestDesignSchema: Schema<TestDesign> = new Schema<TestDesign>({
	name: { type: String, required: true },
});

const AttributeSchema: Schema<Attribute> = new Schema<Attribute>({
	designId: { type: String, required: true },
	name: { type: String, required: true },
});

const ValueSchema: Schema<Value> = new Schema<Value>({
	attributeId: { type: String, required: true },
	name: { type: String, required: true },
	type: { type: String, required: true },
});

export const TestDesignModel = model<TestDesign>('TestDesign', TestDesignSchema);

export const AttributeModel = model<Attribute>('Attribute', AttributeSchema);

export const ValueModel = model<Value>('Value', ValueSchema);
