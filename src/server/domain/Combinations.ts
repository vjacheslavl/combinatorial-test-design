import { Value } from "./TestDesign";

// don't forget to update src/server/models/
 

export interface Combination {
    name: string,
    values: [string, Value][]
}