import { getChallenges } from '../utils/api/challenge_util';

export const RECEIVE_CHALLENGES = "RECEIVE_CHALLENGES";

export const receiveChallenges = challenges => (
  {
    type: RECEIVE_CHALLENGES, 
    challenges
  }
);

export const fetchChallenges = () => dispatch => getChallenges()
  .then(challenges => dispatch(receiveChallenges(challenges)));