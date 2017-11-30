import { connect } from 'react-redux';
import { fetchCompletedChallenges } from '../../actions/challenge_actions';
import Home from './home';

const mapDispatchToProps = dispatch => ({
  fetchCompletedChallenges: () => dispatch(fetchCompletedChallenges())
});

const mapStateToProps = state => ({
  completedChallenges: state.entities.completedChallenges,
  user: state.session.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);