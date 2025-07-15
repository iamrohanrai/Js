// Q1: Check whether number is positive, negative or zero

let num = -5;
if (num < 0) {
  console.log("Negative");
} else if (num === 0) {
  console.log("Zero");
} else {
  console.log("Positive");
}

// Q2: Check whether age is in range 13 to 19 (teenager)

let age = 17;
if (age <= 19 && age >= 13) {
  console.log("Teenager");
}

// Q3: Declare variables of these data types:
// string, number, boolean, null, undefined

let name = "Rohan";
let number = 10; // number
let isActive = true; // boolean
let empty = null; // null
let notAssigned; // undefined

// Q4: Online payment check
let amountPaid = true;
let deliveryStatus;
if (!amountPaid) {
  deliveryStatus = "Pending";
} else {
  deliveryStatus = "Confirmed";
}
// let deliveryStatus = amountPaid ? "Confirmed" : "Pending";

console.log(deliveryStatus);

// If payment done, delivery = "Confirmed", else "Pending"

// Q5: Student grading system
// If marks > 90 => A, >75 => B, >60 => C, else F

let marks = 82;
if (marks > 90) {
  console.log("A");
} else if (marks > 75) {
  console.log("B");
} else if (marks > 60) {
  console.log("C");
} else {
  console.log("D");
}
