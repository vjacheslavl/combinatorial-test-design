import React, { useState, useEffect } from "react";
import Attribute from "./Attribute";
import AddNewAttribute from "./AddNewAttribute";
import Legend from "./Legend";
import { TestDesign } from "../../../server/domain/TestDesign";
import { useParams } from "react-router-dom";
import { Put, Get } from "../../Services";
import { apiRoute } from "../../utils";

const AttributeList: React.FC<{}> = (props) => {
      const [loadData, setLoadData] = useState(true);
      const [testDesign, updatetestDesign] = useState<TestDesign>();
      let params = useParams();

      const designId = params.designId;

      useEffect(
            function reloadData() {
                  async function fetchTestDesigns() {
                        try {
                              var res: TestDesign = await Get(apiRoute.getRoute(`testdesigns?id=${designId}`));
                              updatetestDesign(res);
                              setLoadData(false);
                        } catch (error) {
                              console.log(error);
                        }
                  }
                  if (loadData === true) {
                        fetchTestDesigns();
                  }
            },
            [loadData]
      );


      const saveNewAttributeHandler = async (
            name: string
      ): Promise<void> => {
            try {
                  await Put(
                        apiRoute.getRoute("testdesigns"),
                        {
                              id: designId,
                              payload: { type: "newAttribute", value: name },
                        }
                  );
                  setLoadData(true);

            } catch (e) {
                  console.log(e);
            }
      };

      const saveNewValueHandler = async (
            attributeId: string,
            name: string
      ): Promise<void> => {
            try {
                  await Put(
                        apiRoute.getRoute("testdesigns"),
                        {
                              id: attributeId,
                              payload: { type: "newValue", value: name },
                        }
                  );
                  setLoadData(true);

            } catch (e) {
                  console.log(e);
            }
      };

      return (
            <React.Fragment>
                  <a href={`../`}>[Home]</a>
                  <h1>{testDesign?.name}</h1>
                  <AddNewAttribute onSave={saveNewAttributeHandler} />                  
                  {testDesign?.attributes.map((item) => <Attribute key={item._id} item={item} onSaveValue={saveNewValueHandler}/>)}
                  <a href={`../combinations/${designId}`}>Generate Combinations</a>
                  <Legend/>
            </React.Fragment>
      );
};


export default AttributeList;