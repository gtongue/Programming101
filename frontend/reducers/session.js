import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sessions';
import { SAVE_FILE } from '../actions/saved_file_actions';
import { COMPLETE_CHALLENGE } from '../actions/challenge_actions';
import { merge, values } from 'lodash';

const _emptySession = {
  currentUser: null,
  savedFiles: []
};

export default (state = _emptySession, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user };
    case LOGOUT_CURRENT_USER:
      return _emptySession;
    case SAVE_FILE:
      if(!newState.currentUser.savedFiles.includes(values(action.file)[0].challenge_id)){
        newState.currentUser.savedFiles.push(values(action.file)[0].challenge_id);
      }
      return newState;
    case COMPLETE_CHALLENGE:
      if(!newState.currentUser.completedChallenges.includes(action.challenge.challenge_id)){
        newState.currentUser.completedChallenges.push(action.challenge.challenge_id);
        newState.currentUser.numLines = parseInt(newState.currentUser.numLines) + parseInt(action.challenge.lines_written);
      }
      return newState;
    default:
      return state;
  }
};