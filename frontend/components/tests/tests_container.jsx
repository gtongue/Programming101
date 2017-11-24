import { connect } from 'react-redux';
import Tests from './tests';

const mapStateToProps = state => ({
  tests: state.tests
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Tests);