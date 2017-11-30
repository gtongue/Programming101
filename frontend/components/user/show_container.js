import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Show from './show';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => dispatch(fetchUser(ownProps.match.params.userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);