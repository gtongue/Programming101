import { connect } from 'react-redux';
import Terminal from './terminal';

const mapStateToProps = state => ({
  output: state.terminal.output,
  errors: "no errors yet"
});

export default connect(mapStateToProps)(Terminal);