var nam = "Ayush"; // var is not used now, due to scope issue
let name = "Rohan";
const pi = 3.14; // jo bhi value constant rakhni hai;

// ---------> Primitive <---------
let number = 24; // Number Datatype
let text = "Hello"; // String Datatype
let isTrue = true; // Boolean
let nothing = null; // Null Datatype but technically object return hota hai type of

console.log(typeof nothing);

let undefinedVar = undefined; // Undefined Datatype
console.log(typeof undefinedVar);

let symbolVar = Symbol(); // Symbol datatype
console.log(symbolVar);

// ----------> Non-Primitive <------------
let person = {
  name: "Rohan Rai",
  age: 24,
  isStudent: true,
}; // object datatype

let num = "42";
// let convertedNum = Number(num); // production recomendation to use
// let convertedNum = +num;
let convertedNum = parseInt(num);
console.log(typeof convertedNum);

let str = 123;
let convertedStr = String(str);
console.log(typeof convertedStr);

// Operations

// parenthesis () are the best friend to perform operations
let a = 15;
let b = 5;

let sum = a + b;
let mul = a * b;
let sub = a - b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

let x = 5;
let y = 10;
console.log(x == y); // comparison; == only for data
console.log(x === y); // comparison; === also check data type with data

console.log(x != y); // Not equalto
console.log(x > y);
console.log(x < y);
console.log(x <= y);

console.log(Math.max(5, 10, 45, 50));
console.log(Math.random()); // return a number in between 0 - 1;

console.log(Math.floor(Math.random() * 10));

// recursive method not ideal for production
function NumberGen() {
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber >= 1 && randomNumber <= 6) {
    return randomNumber;
  } else {
    return NumberGen();
  }
}
console.log(`Dice num:`, NumberGen());

// loop version
function NumberGen() {
  let randomNumber;

  while (true) {
    randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 1 && randomNumber <= 6) {
      return randomNumber;
    }
  }
}

let firstName = "Rohan";
let lastName = "Rai";
let fullname = firstName + " " + lastName;

console.log(firstName.toUpperCase());

let myName = "Rohan";
let greeting = `Hello ${myName}`; // this is called tempelate literals
