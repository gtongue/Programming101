import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {receiveSuccess, clearTests, receiveFail} from './actions/tests_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let initialState = {};
  if (window.currentUser) {
    initialState = {
      session: {
        currentUser: window.currentUser
      }
    };
    delete window.currentUser;
  }
  const store = configureStore(initialState);
  window.store = store;
  window.dispatch = store.dispatch;
  window.receiveFail = receiveFail;
  window.receiveSuccess = receiveSuccess;
  window.clearTests = clearTests;
  ReactDOM.render(<Root store = {store} />, root);
});