import {RECEIVE_CHALLENGE,
        RECEIVE_CHALLENGES} from '../actions/challenge_actions';

import { merge } from 'lodash';

const _emptyChallenges = {};

export default (state = _emptyChallenges, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CHALLENGES:
      return merge({}, action.challenges, state);
    case RECEIVE_CHALLENGE:
      return merge({}, state, action.challenge);
    default: 
      return state;
  }
};