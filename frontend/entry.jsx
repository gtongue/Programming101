import React from 'react';
import ReactDOM from 'react-dom';
import {deleteSession, postSession, postUser} from './utils/api/user_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.postUser = postUser;
  ReactDOM.render(<div> React is god</div>, root);
});