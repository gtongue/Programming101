import { getChallenges, getChallenge } from '../utils/api/challenge_util';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";
export const RECEIVE_CHALLENGE = "RECEIVE_CHALLENGE";

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

export const fetchChallenges = () => dispatch => getChallenges()
  .then(challenges => dispatch(receiveChallenges(challenges)));

export const fetchChallenge = id => dispatch => getChallenge(id)
  .then(challenge => dispatch(receiveChallenge(challenge)));