json.extract! @user, :id, :username, :email
json.completedChallenges @user.completed_challenges.pluck(:challenge_id)
json.savedFiles @user.saved_files.pluck(:challenge_id)