json.array! @completed_challenges do |challenge|
  json.username challenge.user.username
  json.challengeId challenge.challenge_id
  json.challengeName challenge.challenge.title
end