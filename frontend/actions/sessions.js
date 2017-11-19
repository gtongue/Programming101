import { deleteSession, postSession, postUser} from '../utils/api/user_util';

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
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = form => dispatch => postSession(form)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));