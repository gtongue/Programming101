json.extract! @user, :id, :username, :email
json.completedChallenges @user.completed_challenges.pluck(:challenge_id)
num_lines = @user.completed_challenges.reduce(0) { |total, challenge| total + challenge.lines_written}
json.numLines num_lines
json.savedFiles @user.saved_files.pluck(:challenge_id)
