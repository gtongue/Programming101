

Challenge.create!([
  {language_id: 1, title: "Variables", skeleton: "let number;\nlet string;\nlet boolean;", solution: "TODO", description: "Variables are how we store information. Examples of varialbes can be numbers, strings, booleans, and more!", tests: "Testing.isEqual(string, \"hello world\", \"Declare the variable string = 'hello world'\");\nTesting.isEqual(boolean, false, \"Declare the variable boolean = false\");\nTesting.isEqual(number, 5, \"Declare the variable number = 5\");", steps: "# Variables\n## To declare a variable we can use the let, const, or var keyword. We will discuss the differences later.\n## Declare a variable of type string and boolean\n  * Try to declare a variable called number with the value 5\n  * Try to declare a variable called string with the value \"hello world\" \n  * Try to declare a variable called boolean with the value false "},
  {language_id: 1, title: "Basic Arrays", skeleton: "let numberArr = [];\nlet stringArr = [];\nlet combinedArr = [];", solution: "TODO", description: "Arrays allow us to store a list of variables.", tests: "Testing.isEqual(numberArr, [1,2,3,4], `Declare an array of numbers with the values [1,2,3,4]`);\nTesting.isEqual(stringArr, [\"hello\",\"arrays\"], `Declare an array of strings with the values [\"hello\", \"arrays\"]`);\nTesting.isEqual(combinedArr, [1,\"hello\",2,\"world\",true], `Declare an array of combined values [1,\"hello\",2,\"world\",true]`);", steps: "# Basic Arrays\n## To declare an array we use brackets. Inside of the brackets can be whatever variables you want such as [1,2,3]\n## Declare three different arrays\n  * Try to declare an array with the four numbers 1,2,3,4\n  * Try to declare an array with the two strings \"hello\" and \"arrays\" \n  * Try to declare an array with different types of values [1,\"hello\",2,\"world\",true]"},
  {language_id: 1, title: "Function Intro", skeleton: "function subtractTwoNumbers(number1, number2){\n  return number1 - number2;\n}\n\nfunction addTwoNumbers(number1, number2){\n\n}", solution: "TODO", description: "Functions are a section of code that we can use to perform a specific task", tests: "Testing.isEqual(addTwoNumbers(5,-4), 1, `Function adds two numbers together`);", steps: "# Function Intro\n## To declare we use the function keyword followed by curly braces marking the beginning and end of the function \n## Fill in the function addTwoNumbers\n  * add number1 and number2 and return the result"},
  {language_id: 1, title: "Math Intro", skeleton: "function squareRoot(num){\n\n}\nfunction round(num){\n\n}", solution: "TODO", description: "Javascript comes with a Math library with many helpful functions", tests: "Testing.isEqual(squareRoot(4), 2, `Square Root works with even numbers`);\nTesting.isEqual(squareRoot(5), Math.sqrt(5), `Square Root works with odd numbers`);\nTesting.isEqual(round(5), 5, `Round doesn't edit whole numbers`);\nTesting.isEqual(round(4.6), 5, `Round rounds up`);\nTesting.isEqual(round(4.4), 4, `Round rounds down`);", steps: "# Math Intro\n## Javascript built in Math library provides us with tons of useful functions!\n## Try console logging Math.pow(8,4).\n  * That is 8 to the power of 4.\n## Fill in the squareRoot function using the Math library\n## Fill in the round function using the Math library"},
  {language_id: 1, title: "Array Access", skeleton: "let arr = [1,2,3,4,5,6,7];\nlet firstElement = arr[0];\nlet secondElement;\nlet middleElement;", solution: "TODO", description: "Arrays can be seen as a list of variables. Let's learn how to access the data once it's inside!", tests: "Testing.isEqual(secondElement, 2, `Second element is the second element in the array`);\nTesting.isEqual(middleElement, 4, `Middle element is the middle element in the array`);", steps: "# Array Access\n## Array's are accessed using brackets. \n## They are indexed starting at 0. Meaning the array [1,2,3] would have the indexes [0,1,2].\n## The number 1 is at the 0th index and so on."},
  {language_id: 1, title: "Array Manipulation", skeleton: "let arr = [1,2,3,4,5,6,7];\narr[0] = \"hello\";", solution: "TODO", description: "Arrays can be mutated(edited) once created as long as it wasn't declared with the const keyword.", tests: "Testing.isEqual(arr[6], 0, `7th element in the array is now 0`);\nTesting.isEqual(arr[5], true, `6th element in the array is now true`);\nTesting.isEqual(arr.length, 8, `There is one more element then previously`);", steps: "# Array Manipulation\n## Array's not only can accessed using brackets but also mutated by using an equals sign.\n- Set the 5th index to true\n- Set the 6th index to 0\n- Push any new element onto the array (Look at the MDN docs if you are confused here)"},
  {language_id: 1, title: "Loops", skeleton: "let arr = [1,2,3,4,5,6,7];\nlet total = 0;\nfor(let i = 0; i < arr.length; i++){\n  \n}", solution: "TODO", description: "Loops allow us to run the same code multiple times without rewriting the same line over and over.", tests: "Testing.isEqual(loopCountingVariable !== 0 , true , `Loop is executed`);\nTesting.isEqual(total, 1+2+3+4+5+6+7, `Adds all the elements in the array`);", steps: "# Loops"},
  {language_id: 1, title: "Unique Substrings", skeleton: "function uniqueSubstrings(string){\n\n}", solution: "TODO", description: "Return an array of the unique substrings from a string", tests: "Testing.isEqual(uniqueSubstrings(\"str\"), [\"s\",\"st\",\"str\",\"t\",\"tr\",\"r\"], `Returns the unique substrings`);", steps: "# Unique Substrings\n## Return an array of the unique substrings from a string"},
  {language_id: 1, title: "Casesar Cipher", skeleton: "function casesarCipher(string, shift){\n\n}", solution: "TODO", description: "Return a string where every character has been shifted n characters.", tests: "Testing.isEqual(casesarCipher(\"aaa\",11),\"lll\", `Encodes simple word`);\nTesting.isEqual(casesarCipher(\"zzz\",1),\"aaa\", `Wraps around z`);\nTesting.isEqual(casesarCipher(\"catz haz\",2),\"ecvb jcvb\", `Works with multiple words`);", steps: "# Caesar Cipher"},
  {language_id: 1, title: "Factors", skeleton: "function factors(num){\n\n}", solution: "TODO", description: "Return an array of factors of the passed in number in ascending order", tests: "Testing.isEqual(factors(10),[1,2,5,10], `Returns the factors of 10`);\nTesting.isEqual(factors(13),[1,13], `Returns the factors of 13`);", steps: "# Factors"},
  {language_id: 1, title: "Two Sum", skeleton: "function twoSum(arr){\n\n}", solution: "TODO", description: "Returns a boolean wheather or not there is a pair of numbers that add to 0", tests: "Testing.isEqual(twoSum([5,1,-7,-5]), true, `Finds a matching pair`);\nTesting.isEqual(twoSum([5,1,-7,-4]), false, `Finds no matching pair`);", steps: "# Two Sum\n## Returns a boolean wheather or not there is a pair of numbers that add to 0"},
  {language_id: 1, title: "Is Prime?", skeleton: "function isPrime(num){\n\n}", solution: "TODO", description: "Returns a boolean wheather or not a number is prime", tests: "Testing.isEqual(isPrime(10), false, `Returns false when 10`);\nTesting.isEqual(isPrime(2), true, `Returns true when 2`);", steps: "# Is Prime?"},
  {language_id: 1, title: "Nth Prime", skeleton: "function nthPrime(n){\n\n}", solution: "TODO", description: "Returns the nth prime number", tests: "Testing.isEqual(nthPrime(1), 2, `Returns the first prime number`);\nTesting.isEqual(nthPrime(5), 11, `Returns the fifth prime number`);", steps: "# Is Prime?"},
  {language_id: 1, title: "Merge Sort", skeleton: "function mergeSort(arr){\n\n}\nfunction merge(arr1, arr2){\n\n}", solution: "TODO", description: "Merge sort is an extremely common sorting algorithm because of it's consistent speed.", tests: "Testing.isEqual(mergeSort([1,2,3,4,5]), [1,2,3,4,5], \"Doesn't change sorted array.\");\nTesting.isEqual(mergeSort([]), [], \"Works with empty array\");\nTesting.isEqual(mergeSort([1]), [1], \"Works with single number\");\nTesting.isEqual(mergeSort([4,2,3,2,5]), [2,2,3,4,5], \"Sorts array 1.\");\nTesting.isEqual(mergeSort([4,2,3,2,5,6]), [2,2,3,4,5,6], \"Sorts array 2.\");", steps: "# Merge Sort\n## [Khan Academy Link](https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)"},
  {language_id: 1, title: "Bubble Sort", skeleton: "function bubbleSort(arr){\n\n}", solution: "TODO", description: "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted.", tests: "Testing.isEqual(bubbleSort([1,2,3,4,5]), [1,2,3,4,5], \"Doesn't change sorted array.\");\nTesting.isEqual(bubbleSort([]), [], \"Works with empty array\");\nTesting.isEqual(bubbleSort([1]), [1], \"Works with single number\");\nTesting.isEqual(bubbleSort([4,2,3,2,5]), [2,2,3,4,5], \"Sorts array 1.\");\nTesting.isEqual(bubbleSort([4,2,3,2,5,6]), [2,2,3,4,5,6], \"Sorts array 2.\");", steps: "# Bubble Sort\n## [Stoimen's Web Log](http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/)"}
])
CompletedChallenge.create!([
  {user_id: 1, challenge_id: 1, lines_written: 3},
  {user_id: 1, challenge_id: 3, lines_written: 7},
  {user_id: 1, challenge_id: 5, lines_written: 4},
  {user_id: 1, challenge_id: 7, lines_written: 5}
])
Language.create!([
  {name: "javascript"},
  {name: "ruby"},
  {name: "html"},
  {name: "css"}
])
SavedFile.create!([
  {user_id: 1, challenge_id: 1, content: "let number = 5;\nlet string = \"hello world\";\nlet boolean = false;"},
  {user_id: 1, challenge_id: 3, content: "function subtractTwoNumbers(number1, number2){\n  return number1 - number2;\n}\n\nfunction addTwoNumbers(number1, number2){\n\treturn number1 + number2;\n}"},
  {user_id: 1, challenge_id: 5, content: "let arr = [1,2,3,4,5,6,7];\nlet firstElement = arr[0];\nlet secondElement = arr[1];\nlet middleElement = arr[parseInt(arr.length/2)];"},
  {user_id: 1, challenge_id: 7, content: "let arr = [1,2,3,4,5,6,7];\nlet total = 0;\nfor(let i = 0; i < arr.length; i++){\n  total += arr[i]\n}"},
  {user_id: 1, challenge_id: 8, content: "function uniqueSubstrings(string){\n\treturn \"\";\n}"}
])
Tag.create!([
  {tag: "easy"},
  {tag: " arrays"},
  {tag: " library"},
  {tag: " loops"},
  {tag: "medium"},
  {tag: " strings"},
  {tag: " numbers"},
  {tag: "medium-hard"},
  {tag: "hard"},
  {tag: "sorting"}
])
TagsJoin.create!([
  {challenge_id: 1, tag_id: 1},
  {challenge_id: 2, tag_id: 1},
  {challenge_id: 2, tag_id: 2},
  {challenge_id: 3, tag_id: 1},
  {challenge_id: 4, tag_id: 1},
  {challenge_id: 4, tag_id: 3},
  {challenge_id: 5, tag_id: 1},
  {challenge_id: 5, tag_id: 2},
  {challenge_id: 6, tag_id: 1},
  {challenge_id: 6, tag_id: 2},
  {challenge_id: 7, tag_id: 1},
  {challenge_id: 7, tag_id: 2},
  {challenge_id: 7, tag_id: 4},
  {challenge_id: 8, tag_id: 5},
  {challenge_id: 8, tag_id: 6},
  {challenge_id: 9, tag_id: 5},
  {challenge_id: 9, tag_id: 6},
  {challenge_id: 10, tag_id: 5},
  {challenge_id: 10, tag_id: 7},
  {challenge_id: 11, tag_id: 5},
  {challenge_id: 11, tag_id: 2},
  {challenge_id: 11, tag_id: 7},
  {challenge_id: 12, tag_id: 5},
  {challenge_id: 12, tag_id: 7},
  {challenge_id: 13, tag_id: 8},
  {challenge_id: 13, tag_id: 7},
  {challenge_id: 14, tag_id: 9},
  {challenge_id: 14, tag_id: 10},
  {challenge_id: 15, tag_id: 5},
  {challenge_id: 15, tag_id: 10}
])
User.create!({username: "demo", email: "demo", password_digest: "$2a$10$fCYrmNv.7/4nJWR8Ee5ZZeBXY93XJtv2HKj.Y8CW8zxRbHPedlBJO", session_token: "LzocqmwCs5Q7XYtzLKHcvg"})
users = User.create!([
  {username: "garrett", email: "demo1", password_digest: "$2a$10$RRE2sSLJ8LEppWlpuRKNrO3U/bsI78NV9vL8Lv.ZU53OY9Gsh7Tpe", session_token: "M315w1vsgXUgjxdO7uD7QQ"},
  {username: "patrick", email: "demo2", password_digest: "$2a$10$IuaV1fu2rXErJMUDKFuKVOCAuc5DhSybu1LhEkP5i8Y5RS1ELLHpi", session_token: "h3iRH6H6idJD_ks59JtCRw"},
  {username: "adam", email: "demo3", password_digest: "$2a$10$qWwdJ57397fcNAk8ChmC.OtWex0O0DqExP7pgcAPDF4dLwIO/uG3O", session_token: "6fFBWNiKwe8-TaMhH2xMzA"},
  {username: "julien", email: "demo4", password_digest: "$2a$10$nUktC/96WvVdO80NWEOYZuIvYqmsrmOm0OcPUeefM2mX.iwmOlkfq", session_token: "CP96YdDDeFsW7D-iRN16pg"},
  {username: "kevin", email: "sdfsd", password_digest: "$2a$10$iJQV9K7qrvPY/uXE.afVW.zYZp2iUT3z6IyzpC//cHVY0oCTzM7jq", session_token: "PytYVitP26P9dZw2_TdjCg"}
])

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