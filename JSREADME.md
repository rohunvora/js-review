# JavaScript Review
This is my review of JavaScript.

## Examples of Data Types
```javascript
  let name = "Rohun Vora";
  let age = 21;
  let isCool = true;
  const friends = ["Graham", "Angel", "Jason", "Frank", "Asia"];
  const tiktokVideo = {
    views: 1000000,
    likes: 250000,
    comments: ["This is the best video", "I'm crying", "wowow wee wow"],
    trending: true
}
```

## Examples of Functions
```javascript
// standard function
 function addNumbers(num1, num2) {
   return num1+ num2;
 }

 //function expression
 const multiplyNumbers = function(num1, num2) {
   return num1 * num2;
 };

 //arrow function

 const subtractNumbers = (num1, num2) => {
   return num1 - num2;
 }
```

## Examples of DOM Elements
```javascript
//query selector
const container = document.querySelector('.container');
 console.log(container);

 const headerTwo = document.createElement('h2');
 headerTwo.textContent = "My First JS Review";

 container.appendChild(headerTwo);

 //add a class to headerTwo
 headerTwo.classList.add('subtitle', 'header-two');


// remove class
 headerTwo.classList.remove('header-two');
 console.log(headerTwo);
 ```

 ### More DOM Manipulation
```javascript
//iterate through my friends array
 //reference each friend
 // create a li
 // add textContent to that li
 // append that to a ul(unordered list)

 const list = document.createElement('ul');

 for (let i=0; i< friends.length; i++) {
   let eachFriend = friends[i];
   console.log(eachFriend);

   const listItem = document.createElement('li');
   listItem.textContent = eachFriend;
   list.appendChild(listItem);
 }

 console.log(list);

 headerThree.addEventListener('click', function() {
   container.appendChild(list);
 });
```

## For Loops
```javascript
function copyMachine(element, num) {
  let createArray = [];
  for (i=0; i < num; i++) {
    createArray.push(element);
  }
  return createArray;
}

console.log(copyMachine('candy', 2));

