import React from 'react';
import { useState } from 'react';

const StickyNote = () => {

    const [stickyNoteInput, setStickyNoteInput] = useState('')

    const addStickyNote= () => {

    }

    return (
        <div className="sticky-note-wrapper">
            <form onSubmit={addStickyNote} className="note-form">
                <textarea className="note-textarea" 
                    placeholder="Add text here..."
                    value={stickyNoteInput}
                    onChange={e => setStickyNoteInput(e.target.value)} >
                </textarea>
                <button className="add-button">+</button>
            </form>

            <div className="sticky-note-footer">
                11/10/11 &nbsp;
                {stickyNoteInput}
                <button className="delete-button">x</button>
            </div>
          
        </div>
    )
}

export default StickyNote; 