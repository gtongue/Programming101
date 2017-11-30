# json.extract! @user, :id, :username, :email
# json.completedChallenges @user.completed_challenges.pluck(:challenge_id)
# json.savedFiles @user.saved_files.pluck(:challenge_id)
json.set! @user.id do 
  json.extract! @user, :id, :username, :email
  num_lines = @user.completed_challenges.reduce(0) { |total, challenge| total + challenge.lines_written}
  json.numLines num_lines
  # json.completed_challenges = @user.completed_challenges
  json.completedChallenges @user.completed_challenges do |challenge|
    json.challengeId challenge.challenge_id
    json.challengeName challenge.challenge.title
    json.numberLines challenge.lines_written
  end

  json.linesOverTime [1,20,100,200,1123,5230,6000]
  json.challengesOverTime [1,2,10,25,29,30,42]
end