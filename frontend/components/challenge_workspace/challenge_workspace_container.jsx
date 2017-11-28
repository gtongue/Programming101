import { connect } from 'react-redux';
import ChallengeWorkspace from './challenge_workspace';
import { receiveOutput, clearTerminal } from '../../actions/terminals';
import { receiveTerminalErrors, clearCodeErrors } from '../../actions/errors';
import { clearTests } from '../../actions/tests_actions';
import { fetchChallenge } from '../../actions/challenge_actions';
import { saveFile, receiveFile} from '../../actions/saved_file_actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearTerminal: () => dispatch(clearTerminal()),
  clearTests: () => dispatch(clearTests()),
  clearErrors: () => dispatch(clearCodeErrors()),
  fetchChallenge: () => dispatch(fetchChallenge(ownProps.match.params.challengeId)),
  saveFile: file => dispatch(saveFile(file)),
  getFile: id => dispatch(receiveFile(id))
});

const mapStateToProps = (state, ownProps) => {
  let saved = false;
  for(let i = 0; i < state.session.currentUser.savedFiles.length; i++){
    let file = state.session.currentUser.savedFiles[i];
    if(parseInt(file) === parseInt(ownProps.match.params.challengeId)){
      saved = true;
      break;
    }
  }
  console.log(saved);
  return {
    user_id: state.session.currentUser.id,
    challenge: state.entities.challenges[ownProps.match.params.challengeId],
    errors: state.errors.code_errors,
    saved: saved,
    savedFile: state.entities.files[ownProps.match.params.challengeId]
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeWorkspace);