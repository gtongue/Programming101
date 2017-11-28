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
  tests: %q[Testing.isEqual(mergeSort([1,2,3,4,5]), [1,2,3,4,5], "Doesn't edit original array.");
  Testing.isEqual(mergeSort([]), [], "Works with empty array");
  Testing.isEqual(mergeSort([4,2,3,2,5]), [2,2,3,4,5], "Sorts array.");],
  solution: "TODO",
  steps: %q[* MVP's
  - `Working code editor`
  - `Testing library`
  - `User show page with progress`
  - `Search challenges`]
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
  tests: %q[Testing.isEqual(mergeSort([1,2,3,4,5]), [1,2,3,4,5], "Doesn't edit original array.");
  Testing.isEqual(mergeSort([]), [], "Works with empty array");
  Testing.isEqual(mergeSort([4,2,3,2,5]), [2,2,3,4,5], "Sorts array.");],
  solution: "TODO",
  steps: %q[* MVP's
  - `Working code editor`
  - `Testing library`
  - `User show page with progress`
  - `Search challenges`]
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
  tests: %q[Testing.isEqual(mergeSort([1,2,3,4,5]), [1,2,3,4,5], "Doesn't edit original array.");
  Testing.isEqual(mergeSort([]), [], "Works with empty array");
  Testing.isEqual(mergeSort([4,2,3,2,5]), [2,2,3,4,5], "Sorts array.");],
  solution: "TODO",
  steps: %q[* MVP's
  - `Working code editor`
  - `Testing library`
  - `User show page with progress`
  - `Search challenges`]
})



TagsJoin.create({challenge_id: 1, tag_id: 2})
TagsJoin.create({challenge_id: 1, tag_id: 4})
TagsJoin.create({challenge_id: 2, tag_id: 1})
TagsJoin.create({challenge_id: 2, tag_id: 3})

SavedFile.create({user_id: 1, challenge_id: 1, content: 'SAVING WOOO'});
SavedFile.create({user_id: 1, challenge_id: 2, content: 'SAVING WOOO'});
