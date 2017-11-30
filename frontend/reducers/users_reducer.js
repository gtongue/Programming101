import { RECEIVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const _emptyUsers = {};

export default (state = _emptyUsers, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, action.user);
    default:
      return state;
  }
};