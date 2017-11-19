import { connect } from 'react-redux';
import { createNewUser } from '../../actions/sessions';
import Singnup from './signup';

const mapDispatchToProps = dispatch => ({
  createNewUser: user => dispatch(createNewUser(user))
});

export default connect(null, mapDispatchToProps)(Singnup);