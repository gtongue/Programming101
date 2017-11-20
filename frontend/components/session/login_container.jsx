import { connect } from 'react-redux';
import { login } from '../../actions/sessions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const mapStateToProps = state => ({
  errors: state.errors.session_errors
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);