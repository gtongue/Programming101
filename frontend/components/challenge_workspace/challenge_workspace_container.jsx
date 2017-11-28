import { connect } from 'react-redux';
import ChallengeWorkspace from './challenge_workspace';
import { receiveOutput, clearTerminal } from '../../actions/terminals';
import { receiveTerminalErrors, clearCodeErrors } from '../../actions/errors';
import { clearTests } from '../../actions/tests_actions';
import { fetchChallenge } from '../../actions/challenge_actions';
import { saveFile } from '../../actions/saved_file_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearTerminal: () => dispatch(clearTerminal()),
  clearTests: () => dispatch(clearTests()),
  clearErrors: () => dispatch(clearCodeErrors()),
  fetchChallenge: () => dispatch(fetchChallenge(ownProps.match.params.challengeId)),
  saveFile: file => dispatch(saveFile(file))
});

const mapStateToProps = (state, ownProps) => ({
  user_id: state.session.currentUser.id,
  challenge: state.entities.challenges[ownProps.match.params.challengeId],
  errors: state.errors.code_errors,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeWorkspace);