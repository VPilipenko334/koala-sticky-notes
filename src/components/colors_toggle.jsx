import React from 'react'; 
import { useState } from 'react';

const ColorsToggle = ({ handleToggleColors }) => {

    const [green, setGreen] = useState(false);
    const [purple, setPurple] = useState(false);
    const [red, setRed] = useState(false);
    const [blue, setBlue] = useState(false);

    return (
        <div className="colors-toggle">
               <p>Choose a sticky-note color: </p>
                    <br/>
               <span className={`${green && 'green'}`} onClick={() => handleToggleColors((prevMode) => !prevMode)}>Green</span>
               <span className="color green"></span>
               <span className="color purple"></span>
               <span className="color red"></span>
               <span className="color blue"></span>
        </div>    
    )
}

export default ColorsToggle; 
