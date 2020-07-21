let name = "Rohun Vora";
let age = 21;
let isCool = true;
const friends = ["Graham", "Angel", "Jason", "Frank", "Asia"];

const tesla = {
  industry: "Electric Cars",
  ceo: "Elon Musk",
  yearFounded: 2003,
  foundingMembers: ['Elon Musk', "JB Straubel", "Martin Eberard"],
  stockTicker: "TSLA",
  vehicles: {
    vehicleOne: "Model S",
    vehicleTwo: "Model X",
    vehicleThree: "Model 3"
  },
  print: function() {
    console.log('Hello, this works with objects');
  }
}

const tiktokVideo = {
  views: 1000000,
  likes: 250000,
  comments: ["This is the best video", "I'm crying", "wowow wee wow"],
  trending: true
}

tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla.vehicles.vehicleThree)
console.log(tesla['vehicles']['vehicleThree']);

function printFriends(array){
  array.forEach(friend => {
    console.log(friend);
  });
 }

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

 // DOM
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

 headerTwo.addEventListener('click', function(){
   headerTwo.textContent = 'Rome';
 })


 //make another element
 const headerThree = document.createElement('h2');
 headerThree.textContent = "Friends";

 container.appendChild(headerThree);

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



 // Probelm Solving

 function fizzBuzz(array) {
   let result = [];
   for (let i=0; i < array.length; i++) {
     let num = array[i];
     console.log(num);

     if (num % 3 === 0 && num % 5 === 0); {
       result.push('FizzBuzz');
     } else if (num % 3 === 0) {
       result.push('Fizz');
     } else if (num % 5 === 0) {
       result.push('Buzz');
     } else {
       result.push(num);
     }
   }
   return result;
 }

 console.log(fixxBuzz([3, 5, 15, 20, 9, 7]));


 //pair programmming

