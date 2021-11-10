import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react/cjs/react.production.min';
import '../redux/actions/sticky_note_actions'
import { stickyNoteReducer } from '../redux/reducers/sticky_note_reducer'
import { initialStickyNoteState } from '../redux/reducers/sticky_note_reducer'
import { UploadPicture } from '../components/picture_form';

const StickyNote = () => {

    const [stickyNoteInput, setStickyNoteInput] = useState('')
    const [stickyNoteState, dispatch] = useReducer(stickyNoteReducer, initialStickyNoteState )
    // we have access to stickyNoteState and dispatch action
    
    const initialStickyNoteState = {
    lastStickyNote: null,
    totalStickyNotes: 0,
    allStickyNotes: []
    }
    
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
        dispatch({ type: 'ADD_STICKY_NOTE', payload: newStickyNote})
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
            < UploadPicture />
    
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
            </div>
          
        </div>
    )
}

export default StickyNote; 