import { getChallenges, 
        getChallenge, 
        postCompletedChallenge } from '../utils/api/challenge_util';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const RECEIVE_CHALLENGE = "RECEIVE_CHALLENGE";
export const COMPLETE_CHALLENGE = "COMPLETE_CHALLENGE";

export const receiveChallenges = challenges => (
  {
    type: RECEIVE_CHALLENGES, 
    challenges
  }
);
export const receiveChallenge = challenge => (
  {
    type: RECEIVE_CHALLENGE, 
    challenge
  }
);

export const completeChallengeAction = challenge => (
  {
    type: COMPLETE_CHALLENGE,
    challenge
  }
);

export const fetchChallenges = () => dispatch => getChallenges()
  .then(challenges => dispatch(receiveChallenges(challenges)));

export const fetchChallenge = id => dispatch => getChallenge(id)
  .then(challenge => dispatch(receiveChallenge(challenge)));

export const completeChallenge = (id, userId, numLines) => dispatch => postCompletedChallenge(id, userId, numLines)
  .then(challenge => dispatch(completeChallengeAction(challenge)));