# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create({username: "demo", email: "demo", password: "password"})
users = [User.create({username: "garrett", email: "demo1", password: "password1"}),
User.create({username: "patrick", email: "demo2", password: "password2"}),
User.create({username: "adam", email: "demo3", password: "password3"}),
User.create({username: "julien", email: "demo4", password: "password4"}),
User.create({username: "kevin", email: "sdfsd", password: "password5"}),
User.create({username: "zach", email: "sdfsd", password: "password5"})]

Language.create({name: "javascript"});
Language.create({name: "ruby"});
Language.create({name: "html"});
Language.create({name: "css"});

javascriptChallengeString = File.read("db/seed_data/javascript_challenges");

while(javascriptChallengeString != "") 
  challenge = Challenge.new()
  nextIndex = javascriptChallengeString.index("_")
  nextValue = javascriptChallengeString[0...nextIndex-1]
  javascriptChallengeString = javascriptChallengeString[nextIndex+2..-1]
  challenge.language_id = nextValue
  nextIndex = javascriptChallengeString.index("_")
  nextValue = javascriptChallengeString[0...nextIndex-1]
  javascriptChallengeString = javascriptChallengeString[nextIndex+2..-1]
  challenge.title = nextValue
  
  nextIndex = javascriptChallengeString.index("_")
  nextValue = javascriptChallengeString[0...nextIndex-1]
  javascriptChallengeString = javascriptChallengeString[nextIndex+2..-1]
  tags = nextValue.split(",")
  
  nextIndex = javascriptChallengeString.index("_")
  nextValue = javascriptChallengeString[0...nextIndex-1]
  javascriptChallengeString = javascriptChallengeString[nextIndex+2..-1]
  challenge.description = nextValue
  nextIndex = javascriptChallengeString.index("_")
  nextValue = javascriptChallengeString[0...nextIndex-1]
  javascriptChallengeString = javascriptChallengeString[nextIndex+2..-1]
  challenge.skeleton = nextValue
  nextIndex = javascriptChallengeString.index("_")
  nextValue = javascriptChallengeString[0...nextIndex-1]
  javascriptChallengeString = javascriptChallengeString[nextIndex+2..-1]
  challenge.tests = nextValue
  nextIndex = javascriptChallengeString.index("_")
  nextValue = javascriptChallengeString[0...nextIndex-1]
  javascriptChallengeString = javascriptChallengeString[nextIndex+2..-1]
  challenge.steps = nextValue
  if javascriptChallengeString[0] == "\n"
    javascriptChallengeString = javascriptChallengeString[1..-1]
  end
  challenge.solution = "TODO"
  challenge.save!
  tags.each do |tag|
    dbtag = Tag.find_by(tag: tag)
    if dbtag
      TagsJoin.create({tag_id: dbtag.id, challenge_id: challenge.id})
    else
      dbtag = Tag.create({tag: tag})
      TagsJoin.create({tag_id: dbtag.id, challenge_id: challenge.id})
    end
  end
end

# TagsJoin.create({challenge_id: 1, tag_id: 2})

# challenge = CompletedChallenge.new({user_id: user1.id, challenge_id: 1, lines_written: 10});
# challenge.created_at = Date.new(2007, 5, 12)
# challenge.save!

allChallenges = Challenge.all
users.each do |user|
  allChallenges = allChallenges.shuffle
  numChallenges = rand(0..allChallenges.length)
  userChallenges = allChallenges.slice(0,numChallenges)
  userChallenges.each do |userChallenge|
    CompletedChallenge.create({
      user_id: user.id, 
      challenge_id: userChallenge.id, 
      lines_written: rand(15..150), 
      created_at:rand(Date.civil(2016,12,1)..Date.civil(2017,12,1))
    })
  end
end

# challenge = CompletedChallenge.new({user_id: 1, challenge_id: 4, lines_written: 19});
# SavedFile.create({user_id: 1, challenge_id: 4, content: "TODO"});
# challenge.created_at = Date.new(2008, 12, 12)
# challenge.save!
