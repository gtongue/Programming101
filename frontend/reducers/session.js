import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sessions';

const _emptySession = {
  currentUser: null
};

export default (state = _emptySession, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.user };
    case LOGOUT_CURRENT_USER:
      return _emptySession;
    default:
      return state;
  }
};