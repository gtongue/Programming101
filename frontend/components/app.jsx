import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HeaderContainer from '../components/application/header_container';
import Footer from '../components/application/footer';

import SignupContainer from '../components/session/signup_container';
import LoginContainer from '../components/session/login_container';

import ChallengeWorkspaceContainer from 
      '../components/challenge_workspace/challenge_workspace_container';

import ChallengeIndexContainer from 
      '../components/challenges/challenge_index_container';

import AccountContainer from '../components/user/account_container';

export default () => (
  <div className = "app">
    <Route path = "/" component={HeaderContainer} />
    <Switch>
      <AuthRoute path = "/signup" component={SignupContainer} />
      <AuthRoute path = "/login" component={LoginContainer} />
      <ProtectedRoute path = "/challenges/:challengeId" component={ChallengeWorkspaceContainer} />
      <ProtectedRoute path = "/challenges" component={ChallengeIndexContainer} />
      <ProtectedRoute path = "/account" component={AccountContainer} />
    </Switch>
    <Route path = "/" component={Footer} />
  </div>
);