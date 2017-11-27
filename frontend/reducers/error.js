import { CLEAR_SESSION_ERRORS, 
        RECEIVE_SESSION_ERRORS,
        RECEIVE_CODE_ERROR,
        CLEAR_CODE_ERRORS} from '../actions/errors';
import { merge } from 'lodash';

const _nullErrors = {
  session_errors: null,
  code_errors: []
};

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, {session_errors: action.errors});
    case CLEAR_SESSION_ERRORS:
      return merge({}, state, {session_errors: null});
    case RECEIVE_CODE_ERROR:
      return merge({}, state, {code_errors: [action.error]});
    case CLEAR_CODE_ERRORS:
      let newState = merge({}, state);
      newState.code_errors = [];
      return newState;
    default:
      return state;
  }
};