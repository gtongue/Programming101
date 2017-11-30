import { getUser } from '../utils/api/user_util';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => getUser(id)
  .then(user => dispatch(receiveUser(user)));