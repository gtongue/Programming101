import { SAVE_FILE, RECEIVE_FILE } from '../actions/saved_file_actions';
import { LOGOUT_CURRENT_USER } from '../actions/sessions';
import { merge } from 'lodash';

const _emptyFiles = {};

export default (state = _emptyFiles, action) => {
  Object.freeze(state);
  switch(action.type){
    case SAVE_FILE:
    case RECEIVE_FILE:
      // let newState = merge([], state);
      // for(let i = 0; i < newState.length; i++){
      //   let file = newState[i];
      //   if(file.id === action.file.id)
      //   {
      //     newState[i] = action.file;
      //     return newState;
      //   }
      // }
      // newState.push(action.file);
      // return newState;
      return merge({}, state, action.file);     
    case LOGOUT_CURRENT_USER:
      return _emptyFiles; 
    default:
      return state;
  }
};