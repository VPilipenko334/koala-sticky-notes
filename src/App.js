import React from 'react';
import './stylesheets/App.css';
import './stylesheets/sticky_note.css'
import Header from './components/header'
// import { ADD_STICKY_NOTE,
//         REMOVE_STICKY_NOTE,
//         REMOVE_ALL_NOTES
// } from './redux/actions/sticky_note_actions'
import { useReducer } from 'react';
// import { useDispatch } from 'react';
import { useState } from 'react';
import { addStickyNote, removeStickyNote, removeAllNotes} from './redux/actions/sticky_note_actions'
import { UploadPicture } from './components/picture_form';

const initialStickyNoteState = {
        allStickyNotes: [],
        totalNumberNotes: 0
    }

const stickyNoteReducer = (oldState = {} , action) => {
    Object.freeze(oldState)

    // let newState = Object.assign({}, oldState)

    switch(action.type) {
        case 'ADD_STICKY_NOTE': {
            const newState = {
                allStickyNotes: [oldState.notes, action.payload],
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
      text: stickyNoteInput
      //rotate if you please
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
              <button className="add-button">Add Note</button>
            </form>

             < UploadPicture />
            <br/>
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

          

            <br/>

            { stickyNoteState.allStickyNotes.map(stickyNote => (
              <div className="inner-text-sticky-note"
              // onDragEnd={dropNote}
              draggable="true"
              key={stickyNote.id}>

                <button className="delete-button"
                onClick={() => dispatch({ type: 'REMOVE_STICKY_NOTE', payload: stickyNote})}
                >x</button>

                <div>{stickyNote.text}</div>
              </div>
            ))
            }

            <div className="sticky-note-footer">
                11/10/11 &nbsp; 
                <br/>
            </div>
        </div>
      </div>
    )
}

export default App;

  



    //template string
    // if koala-mode === true, then add the class .koala-mode
    
     
   