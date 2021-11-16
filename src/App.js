import React from 'react';
import './stylesheets/App.css';
import './stylesheets/sticky_note.css'
import Header from './components/header'
import { useReducer } from 'react';
import { useState } from 'react';
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
      id: '',
      text: stickyNoteInput,
      // backgroundColor: color
    }

    dispatch({ type: 'ADD_STICKY_NOTE', payload: newStickyNote});
    setStickyNoteInput('');
    }

    const handleBackgroundColor = (color, e) => {
      e.preventDefault();
      e.stopPropagation();
      const colorChange = {
        backgroundColor: color
      }
      
    }

    const dragSticky = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }

    const dropSticky = (e) => {
      e.target.style.left = `${e.pageX - 50}px`;
      e.target.style.top = `${e.pageY - 50}px`;
    }


      return (
        <div className="App" onDragOver={dragSticky}>
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
                <div 
                key={stickyNote.id}>
                  
                  <div className="sticky-note-box"
                  draggable="true"
                  onDragEnd={dropSticky}
                  >{stickyNote.text}

                  <button className="delete-button"
                  onClick={() => dispatch({ type: 'REMOVE_STICKY_NOTE', payload: stickyNote})}
                  >Clear All</button>
                  <div>
                    <center className="color-change">
                    Choose a sticky-note color: 
                    <br/>
                      <span className='color green' onClick={handleBackgroundColor.bind(this, 'green')}></span>
                      <span className='color purple' onClick={handleBackgroundColor.bind(this, 'purple')}></span>
                      <span className='color red' onClick={handleBackgroundColor.bind(this, 'red')}></span>
                      <span className='color blue' onClick={handleBackgroundColor.bind(this, 'blue')}></span>
                    </center>
                  </div>
                </div>

                </div>
              ))
              }
        </div>
      </div>
    )
}

export default App;

  



    //template string
    // if koala-mode === true, then add the class .koala-mode
    
     
   