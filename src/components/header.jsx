import React from "react";

const Header = ({ handleToggleKoalaMode  }) => {
    return (
        <div className="header">
            <h2>Sticky Notes App </h2>
            <button className="outside-button" onClick={() => handleToggleKoalaMode((prevMode) => !prevMode)}> Koala Mode </button>
        </div>
    ) 
}

export default Header;