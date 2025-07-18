const person = {
  x: 10,
  firstName: "Rohan",
  lastName: "Rai",
  hobbies: ["gym", "coding"],
  isMarried: false,
  getFullname: function () {
    return "Rohan Rai";
  },
  address: {
    hno: 1,
    street: "Ring Road",
  },
};
console.log(person.getFullname());
console.log(person.address.street);
console.log(person.hobbies);

const remote = {
  color: "black",
  brand: "sony",
  dimensions: {
    height: 1,
    width: 1,
  },
  turnOff: function () {},
  volumeUp: function () {},
};

let fname = "Hitesh";
let fname2 = fname;
// console.log(typeof fname2);
// console.log(fname);
fname2 = "Rohan";
console.log(fname); // ismai changes nahi aaye
console.log(fname2);

/*
let p1 = {
  fname: "Rounak",
};
let p2 = p1;
p2.fname = "muku";
// console.log(p2);
// console.log(p1); // changes p1 mai hue due to memory (heap/stack)
*/

/*
let p1 = {
  fname: "Rounak",
  lname: "Rai",
};
let p2 = {
  ...p1, // spread operator ...
};
p2.fname = "piyush";
console.log(p1);
console.log(p2);
*/

let p1 = {
  fname: "Rounak",
  lname: "Rai",
  address: {
    street: 1,
    hno: 1,
  },
};
let p2 = {
  ...p1, // spread operator ...
};
p2.fname = "piyush";
p2.address.hno = 2; // spread operator donot  works on inner object and this is called shallow copy, to fix this we use deep copy
// console.log(p1);
// console.log(p2);

// deep copy

const p1KaString = JSON.stringify(p1);
let p3 = JSON.parse(p1KaString);
console.log(p3);
p3.address.hno = 4;
console.log(p1);
console.log(p3);

// function deepCopy(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }
