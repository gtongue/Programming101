import { connect } from 'react-redux';
import ChallengeWorkspace from './challenge_workspace';
import { receiveOutput, clearTerminal } from '../../actions/terminals';
import { receiveTerminalErrors, clearCodeErrors } from '../../actions/errors';
import { clearTests } from '../../actions/tests_actions';
import { fetchChallenge, completeChallenge } from '../../actions/challenge_actions';
import { saveFile } from '../../actions/saved_file_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearTerminal: () => dispatch(clearTerminal()),
  clearTests: () => dispatch(clearTests()),
  clearErrors: () => dispatch(clearCodeErrors()),
  fetchChallenge: () => dispatch(fetchChallenge(ownProps.match.params.challengeId)),
  saveFile: file => dispatch(saveFile(file)),
  completeChallenge: (id, userId, numLines) => dispatch(completeChallenge(id, userId,numLines))
});

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  challenge: state.entities.challenges[ownProps.match.params.challengeId],
  errors: state.errors.code_errors,
  tests: state.tests
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeWorkspace);