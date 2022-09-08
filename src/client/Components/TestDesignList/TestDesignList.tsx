import React, { useState, useEffect } from "react";
import { TestDesign } from "../../../../server/domain/TestDesign";
import AddNewTestDesign from "./AddNewTestDesign";
import { Get, Post } from "../../Services";
import { apiRoute } from "../../utils";

const TestDesignList: React.FC<{}> = (props) => {
      const [loadData, setLoadData] = useState(true);
      const [testDesigns, updatetestDesigns] = useState<TestDesign[]>([]);
    
      useEffect(
        function reloadData() {
          async function fetchTestDesigns() {
            try {
              var res: TestDesign[] = await Get(apiRoute.getRoute("testdesigns"));
              updatetestDesigns(res);
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
    

      const saveNewDesignHandler = async (
            name: string
      ): Promise<void> => {
            try {
                  await Post(
                        apiRoute.getRoute("testdesigns"),
                        {
                              name: name,
                              attributes: [],
                              version: "0"
                        }
                  );
                  setLoadData(true);

            } catch (e) {
                  console.log(e);
            }
      };


      return (
            <div>
                  <h1>Test Design List</h1>
                  <AddNewTestDesign onSave={saveNewDesignHandler}/>
                  {testDesigns.map((item) =>  <a key={item._id} href={`/testdesigns/${item._id}`}><div>{item.name}</div></a> ) }
            </div>
      );
};


export default TestDesignList;