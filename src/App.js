import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './stylesheets/App.css';
import './stylesheets/sticky_note.css'
import Header from './components/header'
import { useReducer } from 'react';
import { useState } from 'react';
import DisplayImage from './components/picture_form';

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
          
        case 'REMOVE_ALL_NOTES': {
            const newState = {
              ...oldState, 
              allStickyNotes: [],
              totalNumberNotes: 0
            }
            console.log(
              'After REMOVE_ALL_NOTES: ', newState
            )
            return newState;
    }
        default:
            return oldState;
  }
}

function App() {

    const [stickyNoteInput, setStickyNoteInput] = useState('');
    const [koalaMode, setKoalaMode] = useState(false);
    const [stickyNoteState, dispatch] = useReducer(stickyNoteReducer, initialStickyNoteState )

  
    const addStickyNote = (e) => {
      e.preventDefault();
        if (stickyNoteInput === '') {
          return; 
        }

    const newStickyNote = {
      id: uuidv4(),
      text: stickyNoteInput,
      image: null
    }

    dispatch({ type: 'ADD_STICKY_NOTE', payload: newStickyNote});
    setStickyNoteInput('');
    }


    const handleDrag = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }

    const handleDrop = (e) => {
      e.preventDefault();
      e.target.style.left = `${e.pageX - 50}px`;
      e.target.style.top = `${e.pageY - 50}px`;
    }

      return (
        <div onDragOver={handleDrag}>
          <div className="App">
            <div className={`${koalaMode && 'koala-mode'}`}>
              <header className="App-wrapper">
                < Header handleToggleKoalaMode={setKoalaMode} />

                  <div className="clear-all-button-wrapper">
                  <button className="outside-button"
                  onClick={() => dispatch({ type: 'REMOVE_ALL_NOTES' })}
                  > Clear All Notes </button>
                  </div>

              </header>

            <div className="sticky-note-wrapper">
                <form onSubmit={addStickyNote} className="note-form">
                    <textarea className="note-textarea" 
                        placeholder="Add sticky note text here..."
                        value={stickyNoteInput}
                        onChange={e => setStickyNoteInput(e.target.value)} >
                    </textarea> <br/>
                    <br/>
                  <button className="add-button">Add Note</button>
                </form>
                Total Sticky Notes: {stickyNoteState.totalNumberNotes}
                < DisplayImage />

            </div>

            { stickyNoteState.allStickyNotes.map(stickyNote => (
                  
                  <div 
                  key={stickyNote.id}>
                    <div id="sticky-note-box"
                    draggable="true"
                    onDrop={handleDrop}
                    >{stickyNote.text}

                    {/* <img src={this.props.ImageUrl} height="100" width="100" /> */}

                    <button className="delete-button"
                            onClick={() => dispatch({ type: 'REMOVE_STICKY_NOTE', payload: stickyNote})}
                          >Delete Note</button>
                  </div>
                  </div>
                ))
                }
          </div>
        </div>
      </div>
    )
}

export default App;