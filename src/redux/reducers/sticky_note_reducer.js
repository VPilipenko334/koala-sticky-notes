import { ADD_STICKY_NOTE,
        REMOVE_STICKY_NOTE 
} from "../actions/sticky_note_action"

const stickyNoteReducer = (oldState = {}, action) => {
    Object.freeze(oldState)

    let newState = Object.assign({}, oldState)

    switch(action.type) {
        case ADD_STICKY_NOTE:
            newState[action.note.id] = action.note;
        case REMOVE_STICKY_NOTE:
            delete newState[action.stickyNoteid]
            return newState;
        default:
            return oldState;
    }

}

export default stickyNoteReducer;