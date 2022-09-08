import { FilterQuery } from "mongoose";
import { TestDesign } from "../domain/TestDesign";
import TestDesignModel from "../models/testDesign";


type updatePayload = { id: string, payload: {
  type: string,
  value: any,
}}

export class TestDesignRepository {
  async getTestDesigns() {
    const testDesign = await TestDesignModel.find({});
    return testDesign;
  }

  async getTestDesign(id: string): Promise<TestDesign | undefined> {
    const testDesign = await TestDesignModel.find({ _id: id });
    if (testDesign) {
    return testDesign[0];
    } 
  }

  async createTestDesign(testDesign: TestDesign) {
    let data = {};
    try {
      data = await TestDesignModel.create(testDesign);
    } catch (err) {
      console.error("Error::" + err);
    }
    return data;
  }


  async updateTestDesign(update: updatePayload) {
    let data = {};


    try {

      if (update.payload.type === "newAttribute") {
        
        TestDesignModel.updateOne(
          { _id: update.id },
          { $push: { attributes: {name: update.payload.value, values: []}}},
          {},
            (err) => {
              if (err) {
                console.error(err);
              }
            }
          );
      } else if (update.payload.type === "newValue") {
        TestDesignModel.updateOne(
          { "attributes._id": update.id },
          { $push: { "attributes.$.values": {name: update.payload.value, type: "positive"}}},
          {},
            (err) => {
              if (err) {
                console.error(err);
              }
            }
          );
      } else if (update.payload.type === "setValueType") {
        const updatePath = `attributes.$.values.$[id].type`

        console.log({ $set: { [updatePath]: update.payload.value}})
        TestDesignModel.updateOne(
          { "attributes.values._id": update.id },
          { $set: { [updatePath]: update.payload.value}},
          { arrayFilters: [  { "id._id": update.id  } ] },
            (err) => {
              if (err) {
                console.error(err);
              }
            }
          );
      }

    } catch (err) {
      console.error("Error::" + err);
    }
    return data;
  }

  async deleteTestDesign(designIds: string[]) {
    for (const designId of designIds) {
      try {
        await TestDesignModel.deleteOne({ _id: designId });
      } catch (err) {
        console.error("Error::" + err);
      }
    }
  }
}
