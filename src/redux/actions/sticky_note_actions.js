export const ADD_STICKY_NOTE = "ADD_STICKY_NOTE"
export const REMOVE_STICKY_NOTE = "REMOVE_STICKY_NOTE"

export const addStickyNote = (note) => {
    return {
        type: ADD_STICKY_NOTE,
        note
    }
}

export const removeStickyNote = (stickyNoteid) => {
    return {
        type: REMOVE_STICKY_NOTE,
        stickyNoteid
    }
}