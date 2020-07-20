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
