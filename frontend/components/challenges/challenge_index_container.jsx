import { connect } from 'react-redux';
import { login } from '../../actions/sessions';
import { clearSessionErrors } from '../../actions/errors';
import { fetchChallenges } from '../../actions/challenge_actions';
import { values } from 'lodash';
import ChallengeIndex from './challenge_index';

const mapDispatchToProps = dispatch => ({
  fetchChallenges: () => dispatch(fetchChallenges())
});

const mapStateToProps = state => ({
  challenges: values(state.entities.challenges)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeIndex);