import { combineReducers } from 'redux';

import challenges from './challenges_reducer';
import files from './saved_files_reducer';

export default combineReducers({
  challenges,
  files
});