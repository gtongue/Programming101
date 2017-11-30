import { combineReducers } from 'redux';

import challenges from './challenges_reducer';
import completedChallenges from './completed_challenges_reducer';
import files from './saved_files_reducer';

export default combineReducers({
  challenges,
  completedChallenges,
  files
});