export const RECEIVE_SUCCESS = "RECEIVE_SUCCESS";
export const RECEIVE_FAIL = "RECEIVE_FAIL";
export const CLEAR_TESTS = "CLEAR_TESTS";

export const receiveSuccess = output => {
  return {
    type: RECEIVE_SUCCESS,
    output
  };
};

export const receiveFail = output => {
  return {
    type: RECEIVE_FAIL,
    output
  };
};

export const clearTests = () => {
  return {
    type: CLEAR_TESTS
  };
};