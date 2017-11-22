
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const RECEIVE_TERMINAL_ERRORS = "RECEIVE_TERMINAL_ERROR";

export const receiveSessionErrors = errors => {
  return{
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveTerminalErrors = errors => {
  return{
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearSessionErrors = () => {
  return{
    type: CLEAR_SESSION_ERRORS
  };
};