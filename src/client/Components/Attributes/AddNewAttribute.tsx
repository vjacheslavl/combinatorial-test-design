import React, { useState, useEffect, useContext, useRef } from "react";


const AddNewAttribute: React.FC<{
    onSave: (name: string) => any;
}> = (props) => {

    const nameInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const createSaveHandler = () => {
        if (nameInputRef.current.value !== "") {
            props.onSave(nameInputRef.current.value);
        }
    };

    return (
        <div>
            New attribute: <input type="text" ref={nameInputRef}></input>
            <button onClick={createSaveHandler}>Add</button>
        </div>
    );
};

export default AddNewAttribute;