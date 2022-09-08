import React, { useState, useEffect, useContext, useRef } from "react";


const AddNewAttribute: React.FC<{
    onSave: (name: string) => any;
}> = (props) => {

    const nameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const saveNewValueHandler = () => {
        if (nameInputRef.current.value !== "") {
            props.onSave(nameInputRef.current.value);
        }
    };

    return (
        <div className="addNewItem">
            <input type="text" ref={nameInputRef}></input>
            <button onClick={saveNewValueHandler}>+</button>
        </div>
    );
};

export default AddNewAttribute;