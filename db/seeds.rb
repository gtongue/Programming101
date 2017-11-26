# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "demo", email: "demo", password: "password"});

Language.create({name: "javascript"});
Language.create({name: "ruby"});
Language.create({name: "html"});
Language.create({name: "css"});

Tag.create({tag: "easy"})
Tag.create({tag: "medium"})
Tag.create({tag: "hard"})
Tag.create({tag: "sorting"})

Challenge.create({
  language_id: 1,
  title: "Merge Sort",
  skeleton: "
  function mergeSort(arr){

  }

  function merge(arr1, arr2){

  }
  ",
  solution: "TODO",
})
Challenge.create({
  language_id: 1,
  title: "Merge Sort",
  skeleton: "
  function mergeSort(arr){

  }

  function merge(arr1, arr2){

  }
  ",
  solution: "TODO",
})
Challenge.create({
  language_id: 1,
  title: "Merge Sort",
  skeleton: "
  function mergeSort(arr){

  }

  function merge(arr1, arr2){

  }
  ",
  solution: "TODO",
})
Challenge.create({
  language_id: 1,
  title: "Merge Sort",
  skeleton: "
  function mergeSort(arr){

  }

  function merge(arr1, arr2){

  }
  ",
  solution: "TODO",
})
Challenge.create({
  language_id: 1,
  title: "Merge Sort",
  skeleton: "
  function mergeSort(arr){

  }

  function merge(arr1, arr2){

  }
  ",
  solution: "TODO",
})

TagsJoin.create({challenge_id: 1, tag_id: 2})
TagsJoin.create({challenge_id: 1, tag_id: 4})

TagsJoin.create({challenge_id: 2, tag_id: 2})
TagsJoin.create({challenge_id: 2, tag_id: 4})

TagsJoin.create({challenge_id: 3, tag_id: 2})
TagsJoin.create({challenge_id: 3, tag_id: 4})

TagsJoin.create({challenge_id: 4, tag_id: 2})
TagsJoin.create({challenge_id: 4, tag_id: 4})

TagsJoin.create({challenge_id: 5, tag_id: 2})
TagsJoin.create({challenge_id: 5, tag_id: 4})

