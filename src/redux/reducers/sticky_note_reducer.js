// import { ADD_STICKY_NOTE, REMOVE_STICKY_NOTE, REMOVE_ALL_NOTES } from './actions/sticky_note_actions'

// const initialStickyNoteState = {
//         allStickyNotes: [],
//         totalNumberNotes: 0
//     }

// const stickyNoteReducer = (oldState = {}, action) => {
//     Object.freeze(oldState)

//     // let newState = Object.assign({}, oldState)

//     switch(action.type) {
//         case 'ADD_STICKY_NOTE': {
//             const newState = {
//                 allStickyNotes: [...oldState.allStickyNotes, action.payload],
//                 totalNumberNotes: oldState.allStickyNotes.length + 1,
//         };
//           console.log(
//             'After ADD_STICKY_NOTE: ', newState
//             )
//           return newState; 
//     }
        
//         case 'REMOVE_STICKY_NOTE': {
//             const newState = {
//               ...oldState,
//               allStickyNotes: oldState.allStickyNotes.filter(stickyNote => stickyNote.id !== action.payload.id),
//               totalNumberNotes: oldState.allStickyNotes.length - 1,
//             };
//               console.log(
//                 'After REMOVE_STICKY_NOTE: ', newState
//               )
//               return newState;
//   }
          
//         case 'REMOVE_ALL_NOTES': {
//             const newState = {
//               ...oldState, 
//               allStickyNotes: [],
//               totalNumberNotes: 0
//             }
//             console.log(
//               'After REMOVE_ALL_NOTES: ', newState
//             )
//             return newState;
//     }
//         default:
//             return oldState;
//   }
// }

// export default stickyNoteReducer;