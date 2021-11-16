import React from 'react'; 

const ColorsToggle = ({ handleToggleColors }) => {
    return (
        <div className="colors-toggle">
                    Choose a sticky-note color: 
                    <br/>
                      <span className='color green'></span>
                      <span className='color purple'></span>
                      <span className='color red'></span>
                      <span className='color blue'></span>
                      {/* <span className='color blue' onClick={handleBackgroundColor.bind(this, 'blue')}></span> */}
        </div>
                
    )
}

export default ColorsToggle; 
