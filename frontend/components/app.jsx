import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../components/application/header_container';
import SignupContainer from '../components/session/signup_container';
import LoginContainer from '../components/session/login_container';
import EditorContainer from '../components/editor/editor_container';

export default () => (
  <div className = "app">
    <Route path = "/" component={HeaderContainer} />
    <Route path = "/signup" component={SignupContainer} />
    <Route path = "/login" component={LoginContainer} />
    <Route path = "/editor" component={EditorContainer} />
  </div>
);