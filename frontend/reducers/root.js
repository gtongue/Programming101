import { combineReducers } from 'redux';
import { LOGOUT_CURRENT_USER } from '../actions/sessions';
import sessionReducer from './session';
import errorsReducer from './error';
import terminalReducer from './terminal';
import testsReducer from './test_reducer';
import entitiesReducer from './entities_reducer';

const combinedReducers = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  tests: testsReducer,
  terminal: terminalReducer,
});

export default (state, action) => {
  if(action.type === LOGOUT_CURRENT_USER){
    state = undefined;
  }
  return combinedReducers(state, action);
};