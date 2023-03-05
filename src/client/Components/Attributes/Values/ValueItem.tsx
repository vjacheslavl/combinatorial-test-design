import React, { useState, useEffect, useContext } from "react";
import { Value } from "../../../../server/domain/TestDesign";
import { Put, Get, Delete } from "../../../Services";
import { apiRoute } from "../../../utils";

const valueTypes = ["positive","happyPath", "negative"]

const ValueItem: React.FC<{
      content: Value
}> = (props) => {

      const [valueType, setValueType] = useState(valueTypes.indexOf(props.content.type));

      const setValueTypeHandler = async (
      ): Promise<void> => {
            const changedValue = valueType +1 == 3? 0 :valueType +1
            try {
                  await Put(
                        apiRoute.getRoute("testdesigns"),
                        {
                              id: props.content._id,
                              payload: { type: "setValueType", value: valueTypes[changedValue] },
                        }
                  );
                  setValueType(changedValue);

            } catch (e) {
                  console.log(e);
            }
      };

      return (
            <div className={`valueItem ${valueTypes[valueType]}`} onClick={setValueTypeHandler}>{props.content.name}</div>
      );
};

export default ValueItem;
