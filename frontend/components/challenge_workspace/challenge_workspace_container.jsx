import { connect } from 'react-redux';
import ChallengeWorkspace from './challenge_workspace';
import { receiveOutput, clearTerminal } from '../../actions/terminals';
import { receiveTerminalErrors } from '../../actions/errors';
import { clearTests } from '../../actions/tests_actions';
import { fetchChallenge } from '../../actions/challenge_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearTerminal: () => dispatch(clearTerminal()),
  clearTests: () => dispatch(clearTests()),
  fetchChallenge: () => dispatch(fetchChallenge(ownProps.match.params.challengeId))
});

const mapStateToProps = (state, ownProps) => ({
  challenge: state.entities.challenges[ownProps.match.params.challengeId]
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeWorkspace);