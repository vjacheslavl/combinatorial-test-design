import React, { useState, useEffect, useContext, useRef } from "react";


const AddNewTestDesign: React.FC<{
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
            Create Test Design: <input type="text" ref={nameInputRef}></input>
            <button onClick={createSaveHandler}>Save</button>
        </div>
    );
};

export default AddNewTestDesign;