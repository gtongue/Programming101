import React from 'react';
import UserInfo from './user_info';

export default ({ completedChallenges, history }) => (
  <div className = "home-completed-display">
    <h1>
      Recently Completed Challenges
    </h1>
    {completedChallenges.map((completedChallenge) => (
      // <div>
      //   {completedChallenge.challengeName}
      //   {completedChallenge.challengeName}
      // </div>
      <UserInfo 
        key = {completedChallenge.challengeId + completedChallenge.username}
        messages = {
          [completedChallenge.username + " completed",
            completedChallenge.challengeName]
        } 
        username = {completedChallenge.username}
        onClick = {() => history.push('/challenges/' + completedChallenge.challengeId)}
        onClickIcon = {() => history.push(`/users/${completedChallenge.userId}`)}/>
    ))}
  </div>
);