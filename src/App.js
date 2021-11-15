import React from 'react';
import './stylesheets/App.css';
import './stylesheets/sticky_note.css'
import Header from './components/header'
import { ADD_STICKY_NOTE,
        REMOVE_STICKY_NOTE,
        REMOVE_ALL_NOTES
} from './redux/actions/sticky_note_actions'
import { useReducer } from 'react';
// import { useDispatch } from 'react';
import { useState } from 'react';
import { addStickyNote, removeStickyNote, removeAllNotes} from './redux/actions/sticky_note_actions'
import { UploadPicture } from './components/picture_form';

const initialStickyNoteState = {
        lastStickyNote: null,
        totalStickyNotes: 0,
        allStickyNotes: []
    }

const stickyNoteReducer = (oldState = {} , action) => {
    Object.freeze(oldState)

    let newState = Object.assign({}, oldState)

    switch(action.type) {
        case 'ADD_STICKY_NOTE':
            const newState = {
                lastStickyNote: new Date().toTimeString.slice(0,8), // use a library maybe?
                totalStickyNotes: oldState.notes.length + 1,
                allStickyNotes: [...oldState.notes, action.payload]
        }
        case 'REMOVE_STICKY_NOTE':
            delete newState[action.stickyNoteid]
            return newState;
        case 'REMOVE_ALL_NOTES': 
            return {
                ...oldState,
                allStickyNotes: []
            }
        default:
            return oldState;
    }
}

function App() {

  //  const dispatch = useDispatch();
    const [stickyNoteInput, setStickyNoteInput] = useState('');
    const [stickyNoteColor, setStickyNoteColor] = useState('');
    const [koalaMode, setKoalaMode] = useState(false);
    const [stickyNoteState, dispatch] = useReducer(stickyNoteReducer, initialStickyNoteState )

  
    const addStickyNote = (e) => {
      e.preventDefault();
        if (stickyNoteInput === null) {
          return null; 
        }

    const newStickyNote = {
      id: 1,
      text: stickyNoteInput
      //rotate?
    }

    dispatch({ type: 'ADD_STICKY_NOTE', payload: newStickyNote});
    setStickyNoteInput('');


    }


      return (
        <div className={`${koalaMode && 'koala-mode'}`}>
         <header className="App-wrapper">
          < Header handleToggleKoalaMode={setKoalaMode} />
        </header>
        <div className="sticky-note-wrapper">
            <form onSubmit={addStickyNote} className="note-form">
                <textarea className="note-textarea" 
                    placeholder="Add sticky note text here..."
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
      </div>
    )
}

export default App;

  



    //template string
    // if koala-mode === true, then add the class .koala-mode
    
     
   