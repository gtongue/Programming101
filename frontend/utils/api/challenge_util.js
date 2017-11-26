export const getChallenges = () => (
  $.ajax({
    url: "/api/challenges",
    method: "GET"
  })
);