import { RECEIVE_OUTPUT, CLEAR_TERMINAL } from '../actions/terminals';
import { runCode } from '../utils/terminal/terminal_util';
import { merge } from 'lodash';

const _emptyTerminal = {
  output: ""
};

export default (state = _emptyTerminal, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_OUTPUT:
      return { output: state.output + ("=>" + action.output + "\n") };
    case CLEAR_TERMINAL:
      return _emptyTerminal;
    default: 
      return state;
  }
};