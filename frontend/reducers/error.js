import { CLEAR_SESSION_ERRORS, 
        RECEIVE_SESSION_ERRORS,
        RECEIVE_TERMINAL_ERRORS} from '../actions/errors';
import { merge } from 'lodash';

const _nullErrors = {
  session_errors: null
};

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, {session_errors: action.errors});
    case CLEAR_SESSION_ERRORS:
      return merge({}, state, {session_errors: null});
    case RECEIVE_TERMINAL_ERRORS:
      return merge({}, state, {terminal_errors: null});
    default:
      return state;
  }
};