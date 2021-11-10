//combines multiple, domain specific reducers

import { combineReducers } from 'redux';
import { stickyNoteReducer } from './sticky_note_reducer';

const rootReducer = combineReducers({
    stickyNotes: stickyNoteReducer
})

export default rootReducer;