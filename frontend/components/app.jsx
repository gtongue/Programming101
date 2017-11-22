import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HeaderContainer from '../components/application/header_container';
import Footer from '../components/application/footer';

import SignupContainer from '../components/session/signup_container';
import LoginContainer from '../components/session/login_container';

import ChallengeWorkspaceContainer from '../components/challenge_workspace/challenge_workspace_container';
import AccountContainer from '../components/user/account_container';

export default () => (
  <div className = "app">
    <Route path = "/" component={HeaderContainer} />
    <AuthRoute path = "/signup" component={SignupContainer} />
    <AuthRoute path = "/login" component={LoginContainer} />
    <ProtectedRoute path = "/challenge" component={ChallengeWorkspaceContainer} />
    <ProtectedRoute path = "/account" component={AccountContainer} />
    <Route path = "/" component={Footer} />
  </div>
);