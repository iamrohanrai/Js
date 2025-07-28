Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function greet(name) {
  return `hello ${name}`;
}

greet.describe();

/*

greet("rohan").describe();
❌ Will throw an error.

❗ Why?
Because you're calling describe() on the result of greet("rohan"), which is a string, not a function.

Breakdown:
function greet(name) {
  return `hello ${name}`; // returns a string
}

greet("rohan"); // returns "hello rohan"
So you're basically doing:

"hello rohan".describe();
Which causes:

TypeError: "hello rohan".describe is not a function
✅ What works:
If you want to describe the function itself, you should call describe() on the function, not its return value:


greet.describe(); // ✅ Function name is greet
If you want to do something like calling describe() on a string (just for fun), you could extend String.prototype:

String.prototype.describe = function () {
  console.log(`This string is: "${this}"`);
};

greet("rohan").describe(); // ✅ This string is: "hello rohan"

*/

function add(a, b) {
  // this is called function declaration
  return a + b;
}
const substract = function (a, b) {
  // this is called function expression
  return a - b;
};

const multiply = (a, b) => a * b; // arrow function

// below is called first class function
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const result = applyOperation(15, 5, (x, y) => x / y);
console.log(result);

function createCounter() {
  let count = 0;
  // tiffin concept
  // ek function jab bhi return hota hai toh ek tiffin le kr jata hai sath mai aur bahar kuch bhi ho raha wo tiffin mai sath le jata yaha count ko sath le jayega neeche
  return function () {
    count++;
    return count;
  };
}
function oneF() {
  let myName = "rohan";
}
console.log(myName); // myName is out of function scope and also return bhi ni kiya

(function () {
  console.log("rohan");
})(); //iffy - ye immediately call ho jayega
