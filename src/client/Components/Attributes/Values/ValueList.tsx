import React from "react";
import ValueItem from "./ValueItem";
import AddNewValue from "./AddNewValue";
import { ValueResponse } from "../../../../server/domain/TestDesignResponse";


const ValueList: React.FC<{
      content: ValueResponse[];
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