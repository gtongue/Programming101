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
