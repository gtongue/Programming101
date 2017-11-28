import { postFile, getFile } from '../utils/api/saved_file_util';

export const SAVE_FILE = "SAVE_FILE";
export const RECEIVE_FILE = "RECEIVE_FILE";

const saveFileAction = file => ({
  type: SAVE_FILE,
  file
});

const receiveFileAction = file => ({
  type: RECEIVE_FILE,
  file
});

export const saveFile = file => dispatch => postFile({saved_file: file})
  .then(res => dispatch(saveFileAction(res)));

export const receiveFile = id => dispatch => getFile(id)
  .then(res => dispatch(receiveFileAction(res)));