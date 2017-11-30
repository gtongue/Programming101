import {RECEIVE_COMPLETED_CHALLENGES} from '../actions/challenge_actions';
import { merge } from 'lodash';

const _emptyChallenges = [];

export default (state = _emptyChallenges, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMPLETED_CHALLENGES:
      return action.challenges;
    default: 
      return state;
  }
};