# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({username: "demo", email: "demo", password: "password"});
user2 = User.create({username: "gtongue", email: "demo1", password: "password"});
user3 = User.create({username: "john", email: "demo2", password: "password"});
user4 = User.create({username: "adam", email: "demo3", password: "password"});
user5 = User.create({username: "demo2", email: "demo4", password: "password"});

Language.create({name: "javascript"});
Language.create({name: "ruby"});
Language.create({name: "html"});
Language.create({name: "css"});

Tag.create({tag: "easy"})
Tag.create({tag: "medium"})
Tag.create({tag: "hard"})
Tag.create({tag: "sorting"})

# i = 0;
# while (i < 100) do
#   Challenge.create({
#     language_id: 1,
#     title: "Merge Sort",
#     skeleton: "
#   function mergeSort(arr){

#   }

#   function merge(arr1, arr2){

#   }
#     ",
#     tests: %q[Testing.isEqual(mergeSort([1,2,3,4,5]), [1,2,3,4,5], "Doesn't edit original array.");
#     Testing.isEqual(mergeSort([]), [], "Works with empty array");
#     Testing.isEqual(mergeSort([4,2,3,2,5]), [2,2,3,4,5], "Sorts array.");],
#     solution: "TODO",
#     description: "Merge sort In computer science, merge sort (also commonly spelled mergesort) is an efficient sort",
#     steps: %q[    
#     # Testing Steps
#     ## Another Header
#     * Look a list
#       - It has things in it
#       - That hopefully work
#     ```
#     this is maybe code
#     console.log("is it?");
#     for(let ihopeso = 0; ihopeso < 100; i++)
#     {
    
#     }
#     ```    ]
#   })
#   i += 1
# end
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
# TagsJoin.create({challenge_id: 1, tag_id: 4})
# TagsJoin.create({challenge_id: 3, tag_id: 2})
# TagsJoin.create({challenge_id: 3, tag_id: 4})
# TagsJoin.create({challenge_id: 2, tag_id: 3})

challenge = CompletedChallenge.new({user_id: user1.id, challenge_id: 1, lines_written: 10});
challenge.created_at = Date.new(2007, 5, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user1.id, challenge_id: 2, lines_written: 23});
challenge.created_at = Date.new(2007, 6, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user1.id, challenge_id: 3, lines_written: 42});
challenge.created_at = Date.new(2008, 5, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user2.id, challenge_id: 1, lines_written: 10});
challenge.created_at = Date.new(2007, 5, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user2.id, challenge_id: 2, lines_written: 23});
challenge.created_at = Date.new(2007, 6, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user2.id, challenge_id: 3, lines_written: 42});
challenge.created_at = Date.new(2008, 5, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user3.id, challenge_id: 1, lines_written: 10});
challenge.created_at = Date.new(2007, 5, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user3.id, challenge_id: 2, lines_written: 23});
challenge.created_at = Date.new(2007, 6, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user3.id, challenge_id: 3, lines_written: 42});
challenge.created_at = Date.new(2008, 5, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user4.id, challenge_id: 1, lines_written: 10});
challenge.created_at = Date.new(2007, 5, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user4.id, challenge_id: 2, lines_written: 23});
challenge.created_at = Date.new(2007, 6, 12)
challenge.save!

challenge = CompletedChallenge.new({user_id: user4.id, challenge_id: 3, lines_written: 42});
challenge.created_at = Date.new(2008, 5, 12)
challenge.save!

# challenge = CompletedChallenge.new({user_id: 1, challenge_id: 4, lines_written: 19});
# SavedFile.create({user_id: 1, challenge_id: 4, content: "TODO"});
# challenge.created_at = Date.new(2008, 12, 12)
# challenge.save!
