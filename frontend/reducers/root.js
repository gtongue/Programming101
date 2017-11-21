import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './error';
import terminalReducer from './terminal';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  terminal: terminalReducer
});