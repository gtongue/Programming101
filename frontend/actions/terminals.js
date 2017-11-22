
export const RECEIVE_OUTPUT = "RECEIVE_OUTPUT";
export const CLEAR_TERMINAL = "CLEAR_TERMINAL";

export const receiveOutput = output => {
  return {
    type: RECEIVE_OUTPUT,
    output
  };
};

export const clearTerminal = () => {
  return {
    type: CLEAR_TERMINAL
  };
};