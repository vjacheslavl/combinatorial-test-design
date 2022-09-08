import React, { useState, useEffect, useContext } from "react";
import { Attribute } from "../../../server/domain/TestDesign";
import ValueList from "./Values/ValueList";


const Attribute: React.FC<{
    item: Attribute;
    onSaveValue: (attributeId: string, name: string) => any;
}> = (props) => {

    const saveValueHandler = (name) => {
        
        props.onSaveValue(props.item._id, name)
        
  };


    return (
        <div>
            <div className="attribute">{props.item.name}</div>
            <ValueList content={props.item.values} onSaveValue={saveValueHandler}/>
        </div>
    );
};

export default Attribute;
