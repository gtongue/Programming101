import {RECEIVE_CHALLENGE,
        RECEIVE_CHALLENGES} from '../actions/challenge_actions';
import { SAVE_FILE } from '../actions/saved_file_actions';
import { LOGOUT_CURRENT_USER } from '../actions/sessions';
import { merge } from 'lodash';

const _emptyChallenges = {};

export default (state = _emptyChallenges, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CHALLENGES:
      return merge({}, action.challenges, state);
    case RECEIVE_CHALLENGE:
      return merge({}, state, action.challenge);
    case SAVE_FILE:
      let newState = merge({}, state);
      let keys = Object.keys(newState);
      for(let i = 0; i < keys.length; i++){

        if(action.file[keys[i]]){
          newState[keys[i]].skeleton = action.file[keys[i]].content;
        }
      }
      return newState;
    case LOGOUT_CURRENT_USER:
      return _emptyChallenges; 
    default: 
      return state;
  }
};