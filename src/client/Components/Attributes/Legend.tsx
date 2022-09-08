import React, { useState, useEffect, useContext } from "react";

["positive","happyPath", "negative"]

const Legend: React.FC<{}> = () => {

    return (
        <div>
            <br/>
            <div className="attribute">
            <h4>Legend</h4>
            <div className={`valueItem positive`}>Positive values</div>
            <div className={`valueItem happyPath`}>Happy Path values</div>
            <div className={`valueItem negative`}>Negative values</div>
                </div>
        </div>
    );
};

export default Legend;
