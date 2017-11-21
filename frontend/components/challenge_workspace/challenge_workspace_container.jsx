import { connect } from 'react-redux';
import ChallengeWorkspace from './challenge_workspace';
import { runCode } from '../../actions/terminals';

const mapDispatchToProps = dispatch => ({
  runCode: code => {dispatch(runCode(code));}
});
export default connect(null, mapDispatchToProps)(ChallengeWorkspace);