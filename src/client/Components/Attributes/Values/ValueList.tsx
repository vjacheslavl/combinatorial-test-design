import React, { useState, useEffect, useContext } from "react";
import ValueItem from "./ValueItem";
import AddNewValue from "./AddNewValue";
import { Value } from "../../../../server/domain/TestDesign";


const ValueList: React.FC<{
      content: Value[];
      onSaveValue: (name: string) => any;
  }> = (props) => {


      return (
            <div>
                  <AddNewValue onSave={props.onSaveValue}/>
                  {props.content.map((item) =><ValueItem key={item._id} content={item}/>) }
                  <hr/>
            </div>
      );
};

export default ValueList;