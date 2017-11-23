import { connect } from 'react-redux';
import { createNewUser } from '../../actions/sessions';
import { login } from '../../actions/sessions';
import Singnup from './signup';
import { clearSessionErrors } from '../../actions/errors';

const mapDispatchToProps = dispatch => ({
  createNewUser: user => dispatch(createNewUser(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())  
});
const mapStateToProps = state => ({
  errors: state.errors.session_errors
});
export default connect(mapStateToProps, mapDispatchToProps)(Singnup);