import { RUN_CODE } from '../actions/terminals';

const _emptyTerminal = {
  output: ""
};

export default (state = _emptyTerminal, action) => {
  Object.freeze(state);
  switch(action.type){
    case RUN_CODE:
      return { output: action.code };
    default: 
      return state;
  }
};