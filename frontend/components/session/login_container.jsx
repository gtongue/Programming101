import { connect } from 'react-redux';
import { login } from '../../actions/sessions';
import { clearSessionErrors } from '../../actions/errors';

import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())
});

const mapStateToProps = state => ({
  errors: state.errors.session_errors
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);