// # JS Problem Solving
// Practice pair programming for each problem.Switch roles every 10 mins.
// Be sure to`console.log` to make sure that you got a working solution.
// Ask yourself the following questions with each problem:
// -[] Do I understand what the prompt is asking ?
//   -[] Am I able to break the problem down ?
//     -[] What is my strategy for solving the problem ?
//       -[] Do I understand what my code is doing ?
//         -[] Am I able to foresee any edge cases ?
//           -[] Am I able to track the order of the code that is being executed ?
//             -[] Am I able to track the values of the variables ?
//               -[] Am I able to walk through my code line by line with an example ?
//                 -[] Do I have a working solution ?
// isInside

// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf

function isInside(array, ele) {
  for (i = 0; i < array.length; i++) {
    let name = array[i];
    let number = array.indexOf(ele);
    if (number === 1) {
      console.log("True")
    } else {
      console.log("False")
    }
  }
}

console.log(isInside(['taylor', 'rome', 'adam'], 'fred'));
// //
// // isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// // isInside(['pete', 'adam', 'taylor'], 'fred'); // => false
// ```
// ### reverseStr
//   ```js
// // Write a function `reverseStr(str)` that takes in a string as a parameter and
// // returns the string but with the characters in reverse.

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseString('bootcamp'));

// // Examples:
// //
// // reverseStr('bootcamp'); //=> 'pmactoob'
// // reverseStr('General Assembly'); //=> 'ylbmessA lareneG'
// ```
// ### luckySevens
//   ```js
// // Write a function `luckySevens(max)` that returns an array of all numbers up
// // to max (inclusive) that are divisible by 7.

function luckySevens(max) {
  let newArray = [];
  for (i=1; i < max; i++) {
    if (i % 7 === 0) {
      newArray.push(i)
    } else {
      console.log("Not divisble by 7")
    }
  }
  console.log(newArray);
  return newArray;
}

luckySevens(25);

// // Examples:
// //
// // luckySevens(25); // => [ 7, 14, 21 ]
// // luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]
// ```
// ### copyMachine
//   ```js
// // Write a function `copyMachine(element, num)` that takes in an element and a number
// // it should return an array of length `num` that is filled with `element`.

function copyMachine(element, num) {
  let createArray = [];
  for (i=0; i < num; i++) {
    createArray.push(element);
  }
  return createArray;
}

console.log(copyMachine('candy', 2));


// //
// // Examples:
// //
// // copyMachine('candy', 0); // => []
// // copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// // copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// // copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
// ```
// ### everyOtherWord
//   ```js
// // Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// // an array containing every other word in that sentence.

function everyOtherWord(element) {
  let newNewArray = [];
  let sentenceSplit = element.split(" ");
  for (i = 0; i < sentenceSplit.length; i++) {
    if(i % 2 === 0) {
      newNewArray.push(sentenceSplit[i]);
    }
    }
    return newNewArray
  }

console.log(everyOtherWord('hello how are you doing on this lovely day'));


// //
// // Examples:
// //
// // everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// // everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
// ```
// ### wordYeller
//   ```js
// // Write a function `wordYeller(sentence)` that takes in a sentence string as
// // input. It should return the sentence where every word has an exclamation
// // point behind it, except words that already have punctuation. Punctuation
// // marks are ". , ! ? ; :"
// //

let softSentence = "Stop it now! Please, wont you stop?";

function wordYeller(sentence) {
  //create a new array
  let newestArray = [];
  //split the sentence
  let splitSentence = sentence.split(" ");
  let exclamation = "! ";
   //create a for loop that cycles through the new split up array
  for (i=0; i < splitSentence.length; i++) {
    // if statement that checks if the word has punctuation in it
    if (splitSentence[i].includes(".", ",","!","?",";",":") == true) {
      newestArray.push(splitSentence[i]);
    } else {
      newestArray.push(splitSentence[i].concat(exclamation));
    }
  }
  let yelledWords = newestArray.join("");
  return yelledWords;
}

console.log(wordYeller(softSentence));

// // Example 1
// // let sent = "Stop it now! Please, wont you stop?";
// // let yelledWords = wordYeller(sent);
// // yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
// //
// // Example 2
// // let words = "Go to the store and grab the following: milk, bread, run, and cake";
// // wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
// ```
// ### arraySubstring
//   ```js
// // Write a function `arraySubstring(words, str)` that takes in an array of
// // strings and a string as arguments and returns an array where each element is
// // replaced with true if the string is a substring of the element and false if
// // it is not.

function arraySubstring(words, str) {


}



// //
// // Examples:
// //
// // arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// // => [true, false, true, true]
// // arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// // => [true, false, false, true]
// ```
// #### evenCaps
//   ```js
// // Write a function evenCaps(sentence) that takes in a sentence as an
// // argument and returns the same string with each even index being
// // capitalized. Index 0 counts as even.
// //
// // Examples:
// //
// // evenCaps("Tom got a small piece of pie")
// // => "ToM GoT A SmAlL PiEcE Of pIe"
// // evenCaps("the book is in front of the table")
// // => "ThE BoOk iS In fRoNt oF ThE TaBlE"
// ```
