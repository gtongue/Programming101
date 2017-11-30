import { combineReducers } from 'redux';

import challenges from './challenges_reducer';
import completedChallenges from './completed_challenges_reducer';
import files from './saved_files_reducer';
import users from './users_reducer';

export default combineReducers({
  users,
  challenges,
  completedChallenges,
  files
});