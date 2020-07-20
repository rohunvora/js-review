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
