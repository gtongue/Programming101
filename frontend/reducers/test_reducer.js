import { CLEAR_TESTS, 
        RECEIVE_FAIL, 
        RECEIVE_SUCCESS} from '../actions/tests_actions';
import { merge } from 'lodash';
        
const _emptyTests = {
  success: [],
  fail: []
};

export default (state = _emptyTests, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SUCCESS:
      return merge({}, state, {success: state.success.concat(action.output)});
    case RECEIVE_FAIL:
    return merge({}, state, {fail: state.fail.concat(action.output)});
    case CLEAR_TESTS:
      return _emptyTests;
    default:
      return state;
  }
};