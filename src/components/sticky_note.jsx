import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react/cjs/react.production.min';
import '../redux/actions/sticky_note_actions'
import { initialStickyNoteState } from '../redux/reducers/sticky_note_reducer'
import { UploadPicture } from '../components/picture_form';
import stickyNoteReducer from '../redux/reducers/sticky_note_reducer';

const StickyNote = () => {
    
    const [stickyNoteInput, setStickyNoteInput] = useState('')
    const [stickyNoteColor, setStickyNoteColor] = useState('')
    // const [stickyNoteState, dispatch] = useReducer(stickyNoteReducer, initialStickyNoteState )

    // we have access to stickyNoteState and dispatch action
    

    //sending a request to our redux store
        const addStickyNote = (e) => {
        e.preventDefault();

        if (stickyNoteInput === null) { // if the note is empty, we don't want to add it
            return; 
        }

        //this is what gets typed in the sticky note 
        const newStickyNote = {
            id: 1, // give it an id // change this later 
            text: stickyNoteInput, 
        };

        //sending this to the redux store with the action we've created
        // dispatch({ type: 'ADD_STICKY_NOTE', payload: newStickyNote})
    }

 

    return (
        <div className="sticky-note-wrapper">
            <form onSubmit={addStickyNote} className="note-form">
                <textarea className="note-textarea" 
                    placeholder="Add text here..."
                    value={stickyNoteInput}
                    onChange={e => setStickyNoteInput(e.target.value)} >
                </textarea>
            </form>
            <button className="add-button">Add Note</button>
            < UploadPicture />
            <br/>
    
                <div><center className="color-change">
                 Choose a sticky-note color: 
                <br/>
                <span id='1' class='color clr1'></span>
                <span id='2' class='color clr2'></span>
                <span class='color clr3'></span>
                <span class='color clr4'></span>

                </center>
            </div>
            <br/>
            <div className="sticky-note-footer">
                11/10/11 &nbsp; 
                {/* {stickyNoteState
                    .notes.map(note => (
                        <div>
                            {note.text}
                        </div>
                    ))
                    } */}
                <button className="delete-button">x</button>
                <br/>
            </div>
        </div>
    )
}

export default StickyNote; 