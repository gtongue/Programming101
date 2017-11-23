import { connect } from 'react-redux';
import { receiveOutput, clearTerminal } from '../../actions/terminals';
import { receiveTerminalErrors } from '../../actions/errors';
import Terminal from './terminal';


const mapStateToProps = state => ({
  output: state.terminal.output
});

const mapDispatchToProps = dispatch => ({
  receiveOutput: output => {dispatch(receiveOutput(output));},
  receiveTerminalErrors: errors => {dispatch(receiveTerminalErrors(errors));}
});
export default connect(mapStateToProps, mapDispatchToProps)(Terminal);