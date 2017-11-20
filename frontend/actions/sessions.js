import { deleteSession, postSession, postUser} from '../utils/api/user_util';
import { receiveSessionErrors, clearSessionErrors} from './errors';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => {
  return{
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => {
  return{
    type: LOGOUT_CURRENT_USER
  };
};

export const createNewUser = form => dispatch => postUser(form)
  .fail(error => dispatch(receiveSessionErrors(error.responseJSON)))
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = form => dispatch => postSession(form)
  .fail(error => dispatch(receiveSessionErrors(error.responseJSON)))
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));