// import { FETCH_BUTTON_CLICKED } from "../actions/Types";

// export default function buttonReducer(state=null,action){
//     switch(action.type){
//         case FETCH_BUTTON_CLICKED:
//             return action.payload;
//             break;
//     }
//     return state;
// }


import { FETCH_BUTTON_CLICKED } from "../actions/Types";

export default function buttonReducer(state = null, action) {
  switch (action.type) {
    case FETCH_BUTTON_CLICKED:
      return action.payload;
    default:
      return state;
  }
}
