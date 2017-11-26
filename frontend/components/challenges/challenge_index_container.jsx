import { connect } from 'react-redux';
import { login } from '../../actions/sessions';
import { clearSessionErrors } from '../../actions/errors';

import ChallengeIndex from './challenge_index';

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeIndex);