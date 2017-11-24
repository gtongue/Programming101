import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './error';
import terminalReducer from './terminal';
import testsReducer from './test_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tests: testsReducer,
  terminal: terminalReducer
});