import { connect } from 'react-redux';
import { createNewUser } from '../../actions/sessions';
import Singnup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: user => dispatch(createNewUser(user))
});
const mapStateToProps = state => ({
  errors: state.errors.session_errors
});
export default connect(mapStateToProps, mapDispatchToProps)(Singnup);