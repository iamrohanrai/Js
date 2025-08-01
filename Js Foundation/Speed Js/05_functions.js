// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// greet("rohan");
// greet("ayush");

let globalVar = "I am A Global";
function modifyGlobal() {
  globalVar = "I am a modified";
  let blockScopedVar = "I am Blocked- Scoped";
  console.log(blockScopedVar);
}
modifyGlobal();
// console.log(globalVar);

let config = (function () {
  console.log("server running");
})(); //IIFE - EXECUTE HANDSON

let person1 = {
  name: "ayush",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
let person2 = {
  name: "rohan",
};
// bind use nahi kare because it returns a new function
let resultperson = person1.greet.bind(person2);
resultperson();

// call actually call it
person1.greet.call(person2);
