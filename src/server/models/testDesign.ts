import Database from '../dbConfigs';
import {Schema} from "mongoose";
import { TestDesign } from "../domain/TestDesign";

const {mongo: {model}} = Database; 

// don't forget to update src/server/domain/
const TestDesignSchema: Schema<TestDesign> = new Schema<TestDesign>({
    name: {type: String, required: true},
    attributes: [{
        name: {type: String},
        values: [{
            name: {type: String},
            type: {type: String},
        }]
    }],
    version: {type: String, required: true},
});

export default model<TestDesign>('TestDesigns',TestDesignSchema);

