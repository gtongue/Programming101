import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sessions';
import { SAVE_FILE } from '../actions/saved_file_actions';
import { merge, values } from 'lodash';

const _emptySession = {
  currentUser: null,
  savedFiles: []
};

export default (state = _emptySession, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user };
    case LOGOUT_CURRENT_USER:
      return _emptySession;
    case SAVE_FILE:
      let newState = merge({}, state);
      if(!newState.currentUser.savedFiles.includes(values(action.file)[0].challenge_id)){
        newState.currentUser.savedFiles.push(values(action.file)[0].challenge_id);
      }
      return newState;
    default:
      return state;
  }
};