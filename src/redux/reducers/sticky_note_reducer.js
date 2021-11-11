import { ADD_STICKY_NOTE,
        REMOVE_STICKY_NOTE,
        REMOVE_ALL_NOTES
} from "../actions/sticky_note_actions"

    const initialStickyNoteState = {
        lastStickyNote: null,
        totalStickyNotes: 0,
        allStickyNotes: []
    }


const stickyNoteReducer = (oldState = {} , action) => {
    Object.freeze(oldState)

    // let newState = Object.assign({}, oldState)

    switch(action.type) {
        case ADD_STICKY_NOTE:
            const newState = {
                lastStickyNote: new Date().toTimeString.slice(0,8), // use a library maybe?
                totalStickyNotes: oldState.notes.length + 1,
                allStickyNotes: [...oldState.notes, action.payload]
        }
        case REMOVE_STICKY_NOTE:
            delete newState[action.stickyNoteid]
            return newState;
        case REMOVE_ALL_NOTES: 
            return {
                ...oldState,
                allStickyNotes: []
            }
        default:
            return oldState;
    }
}

export default stickyNoteReducer; 