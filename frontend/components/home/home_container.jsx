import { connect } from 'react-redux';
import { fetchCompletedChallenges, fetchChallenges } from '../../actions/challenge_actions';
import { values } from 'lodash';

import Home from './home';

const mapDispatchToProps = dispatch => ({
  fetchCompletedChallenges: () => dispatch(fetchCompletedChallenges()),
  fetchChallenges: () => dispatch(fetchChallenges())
});

const mapStateToProps = state => ({
  completedChallenges: state.entities.completedChallenges,
  challenges: values(state.entities.challenges),
  user: state.session.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);