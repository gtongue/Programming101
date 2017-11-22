import { connect } from 'react-redux';
import ChallengeWorkspace from './challenge_workspace';
import { receiveOutput, clearTerminal } from '../../actions/terminals';
import { receiveTerminalErrors } from '../../actions/errors';

const mapDispatchToProps = dispatch => ({
  receiveOutput: output => {dispatch(receiveOutput(output));},
  receiveTerminalErrors: errors => {dispatch(receiveTerminalErrors(errors));},
  clearTerminal: () => {dispatch(clearTerminal());}
});

export default connect(null, mapDispatchToProps)(ChallengeWorkspace);