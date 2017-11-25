import { connect } from 'react-redux';
import TestIndex from './test_index';

import { receiveSuccess, 
        clearTests, 
        receiveFail } from '../../actions/tests_actions';

const mapStateToProps = state => ({
  tests: state.tests
});

const mapDispatchToProps = dispatch => ({
  logSuccess: output => dispatch(receiveSuccess(output)),
  logFail: output => dispatch(receiveFail(output)),
  clearTests: () => dispatch(clearTests())
});

export default connect(mapStateToProps, mapDispatchToProps)(TestIndex);