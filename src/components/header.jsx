import React from "react";

const Header = ({ handleToggleKoalaMode,  }) => {
    return (
        <div className="header">
        <h1>Sticky Notes App </h1>
        <button className="koala-mode-button" onClick={() => handleToggleKoalaMode((prevMode) => !prevMode)}> Koala Mode </button>
        </div>
    )
}

export default Header;