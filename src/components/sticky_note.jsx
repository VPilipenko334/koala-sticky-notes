import React from 'react';

const StickyNote = () => {

    const addStickyNote= () => {

    }

    return (
        <div className="sticky-note-wrapper">
            <form onSubmit={addStickyNote} className="note-form">
                <textarea className="note-textarea" placeholder="Add text here..."></textarea>
                <button>+</button>
            </form>

            <div className="sticky-note-footer">
                11/10/11 &nbsp;
                <button>x</button>
            </div>
        </div>
    )
}

export default StickyNote; 