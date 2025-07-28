/*✅ Q1: Add method using prototype

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 1. Add a method getDetails using prototype that returns: "Name: Rohan, Age: 26"
// 2. Create two person objects and test it */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getDetails = function () {
  return `Name: ${this.name}, Age: ${this.age}`;
};
const p1 = new Person("Rohan", 26);
console.log(p1.getDetails());

/*
✅ Q2: Inheritance using constructor functions
// 1. Create a constructor function Vehicle with properties: brand, wheels
// 2. Create another constructor function Car that inherits from Vehicle
// 3. Add model to Car, and method describe() => "Brand: Honda, Wheels: 4, Model: City" */
function Vehicle(brand, wheels) {
  this.brand = brand;
  this.wheels = wheels;
}
function Car(brand, wheels, model) {
  Vehicle.call(this, brand, wheels); // inherit properties
  this.model = model;
}
Car.prototype = Object.create(Vehicle.prototype); // inherit methods
Car.prototype.constructor = Car;

Car.prototype.describe = function () {
  return `Brand: ${this.brand}, Wheels: ${this.wheels}, Model: ${this.model}`;
};

const myCar = new Car("Honda", 4, "City");
console.log(myCar.describe()); // Brand: Honda, Wheels: 4, Model: City

/*
✅ Q3: Custom method in Array prototype */
Array.prototype.evenNumbers = function () {
  return this.filter(function (num) {
    return num % 2 === 0;
  });
};

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums.evenNumbers()); // [2, 4, 6]
