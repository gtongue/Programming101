import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';

export default function configureStore(preloadedState = {}) {
  // return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}