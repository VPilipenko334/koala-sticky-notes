import { ADD_STICKY_NOTE,
        // REMOVE_STICKY_NOTE 
} from "../actions/sticky_note_actions"


export const initialStickyNoteState = {
    lastStickyNote: null,
    totalStickyNotes: 0,
    allStickyNotes: []
}

export const stickyNoteReducer = (oldState , action) => {
    Object.freeze(oldState)

    // let newState = Object.assign({}, oldState)

    switch(action.type) {
        case ADD_STICKY_NOTE:
            const newState = {
                lastStickyNote: new Date().toTimeString.slice(0,8), // use a library maybe?
                totalStickyNotes: oldState.notes.length + 1,
                allStickyNotes: [...oldState.notes, action.payload]
               
            //adding a new sticky note to the redux store
        }
        break;
        // case REMOVE_STICKY_NOTE:
        //     delete newState[action.stickyNoteid]
        //     return newState;
        default:
            return newState;
    }
}


