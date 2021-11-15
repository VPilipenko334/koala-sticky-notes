import React from 'react';
import './stylesheets/App.css';
import './stylesheets/sticky_note.css'
import Header from './components/header'
import { useReducer } from 'react';
import { useState } from 'react';
import { addStickyNote, removeStickyNote, removeAllNotes} from './redux/actions/sticky_note_actions'
import { UploadPicture } from './components/picture_form';

const initialStickyNoteState = {
        allStickyNotes: [],
        totalNumberNotes: 0
    }

const stickyNoteReducer = (oldState = {}, action) => {
    Object.freeze(oldState)

    // let newState = Object.assign({}, oldState)

    switch(action.type) {
        case 'ADD_STICKY_NOTE': {
            const newState = {
                allStickyNotes: [...oldState.allStickyNotes, action.payload],
                totalNumberNotes: oldState.allStickyNotes.length + 1,
        };
          console.log(
            'After ADD_STICKY_NOTE: ', newState
            )
          return newState; 
    }

        case 'REMOVE_STICKY_NOTE': {
            const newState = {
              ...oldState,
              allStickyNotes: oldState.allStickyNotes.filter(stickyNote => stickyNote.id !== action.payload.id),
              totalNumberNotes: oldState.allStickyNotes.length - 1,
            };
              console.log(
                'After REMOVE_STICKY_NOTE: ', newState
              )
              return newState;
  }
            // delete newState[action.stickyNoteid]
            // return newState;
        case 'REMOVE_ALL_NOTES': {
            return {
                ...oldState,
                allStickyNotes: [],
                totalNumberNotes: 0
            }
    }
        default:
            return oldState;
  }
}

function App() {

    const [stickyNoteInput, setStickyNoteInput] = useState('');
    const [stickyNoteColor, setStickyNoteColor] = useState('');
    const [koalaMode, setKoalaMode] = useState(false);
    const [stickyNoteState, dispatch] = useReducer(stickyNoteReducer, initialStickyNoteState )

  
    const addStickyNote = (e) => {
      e.preventDefault();
        if (stickyNoteInput === '') {
          return; 
        }

    const newStickyNote = {
      text: stickyNoteInput
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
                </textarea> <br/>
              <button className="add-button">Add Note</button>
            </form>

             < UploadPicture />

        </div>
        { stickyNoteState.allStickyNotes.map(stickyNote => (
              <div className="inner-text-sticky-note"
              // onDragEnd={dropNote}
              draggable="true"
              key={stickyNote.id}>
                
                <div className="sticky-note-box">{stickyNote.text}

                <button className="delete-button"
                onClick={() => dispatch({ type: 'REMOVE_STICKY_NOTE', payload: stickyNote})}
                >Clear All</button>
                <div>
                  <center className="color-change">
                  Choose a sticky-note color: 
                  <br/>
                    <span id='1' className='color clr1'></span>
                    <span id='2' className='color clr2'></span>
                    <span className='color clr3'></span>
                    <span className='color clr4'></span>
                  </center>
                </div>
              </div>

              </div>
            ))
            }
      </div>
    )
}

export default App;

  



    //template string
    // if koala-mode === true, then add the class .koala-mode
    
     
   