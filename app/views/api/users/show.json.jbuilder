
json.set! @user.id do 
  json.extract! @user, :id, :username, :email
  num_lines = @user.completed_challenges.reduce(0) { |total, challenge| total + challenge.lines_written}
  json.numLines num_lines

  ordered_challenges = @user.completed_challenges.order(created_at: :desc)
  json.completedChallenges ordered_challenges do |challenge|
    json.completedAt challenge.created_at
    json.challengeId challenge.challenge_id
    json.challengeName challenge.challenge.title
    json.numberLines challenge.lines_written
  end
  
  if !ordered_challenges.empty?
    challengeData = []
    challengeLabels = []

    linesData = []
    linesLabels = []

    early_date = ordered_challenges[-1].created_at
    later_date = ordered_challenges[0].created_at

    days_between = (later_date.to_date - early_date.to_date).to_i
    days_adder = (days_between.to_f / 10.to_f).ceil

    start_date = early_date
    11.times do 
      challenges = ordered_challenges.where(created_at: early_date..start_date)
      challengeData << challenges.length
      challengeLabels << start_date.strftime("%m/%Y")

      numLines = challenges.reduce(0) {|total, challenge| total + challenge.lines_written }
      linesLabels << start_date.strftime("%m/%Y")
      linesData << numLines
      start_date += days_adder.day
    end

    challengesOverTime = {
      labels: challengeLabels,
      data: challengeData
    }

    linesOverTime = {
      labels: linesLabels,
      data: linesData
    }
    json.challengesOverTime challengesOverTime
    json.linesOverTime linesOverTime
  else
    json.challengesOverTime ({data: [], labels: []})
    json.linesOverTime ({data: [], labels: []})
  end

  challengesNum = @challenges.length
  completedNum = @user.completed_challenges.length
  completionData = { challengesNum: challengesNum, completedNum: completedNum }
  json.completionData completionData
end