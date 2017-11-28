export const getChallenges = () => (
  $.ajax({
    url: "/api/challenges",
    method: "GET"
  })
);

export const getChallenge = id => (
  $.ajax({
    url: "/api/challenges/" + id,
    method: "GET"
  })
);

export const postCompletedChallenge = (challenge_id, user_id, lines_written) => (
  $.ajax({
    url: '/api/completed_challenges',
    method: "POST",
    data: {completedchallenge: {challenge_id, user_id, lines_written}}
  })
);