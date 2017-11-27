
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_CODE_ERROR = "RECEIVE_CODE_ERROR";
export const CLEAR_CODE_ERRORS = "CLEAR_CODE_ERROR";

export const receiveSessionErrors = errors => {
  return{
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveCodeError = error => {
  return{
    type: RECEIVE_CODE_ERROR,
    error
  };
};

export const clearSessionErrors = () => {
  return{
    type: CLEAR_SESSION_ERRORS
  };
};

export const clearCodeErrors = () => {
  return{
    type: CLEAR_CODE_ERRORS
  };
};