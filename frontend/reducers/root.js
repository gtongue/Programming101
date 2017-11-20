import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './error';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});