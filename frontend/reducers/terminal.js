import { RECEIVE_OUTPUT, CLEAR_TERMINAL } from '../actions/terminals';
import { merge } from 'lodash';

const _emptyTerminal = {
  output: []
};

export default (state = _emptyTerminal, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_OUTPUT:
      return { output: state.output.concat(action.output) };
    case CLEAR_TERMINAL:
      return _emptyTerminal;
    default: 
      return state;
  }
};