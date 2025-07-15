// Print all multiples of 7 between 1 to 100
let result = [];
for (let i = 7; i < 100; i++) {
  if (i % 7 === 0) {
    result.push(i);
  }
}
console.log(result);

// Given an array, count how many are even & how many are odd
let numbers = [12, 5, 8, 3, 7, 10, 21];
// Output: Even: 3, Odd: 4
let even = 0;
let odd = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(`Even: ${even}, Odd: ${odd}`);

// Use loop to print:
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

//  Q4: Sum Till N (while loop)
//Print sum of numbers from 1 to N
//(Assume N = 10)
let N = 10;
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

/*
 Q5: Password Retry System
User gets 3 chances to enter password
If wrong all 3 times → print "Access Blocked"
If correct, print "Access Granted"

js
Copy
Edit
let password = "1234";  // You can hardcode attempts
*/
// let password = "1234";
// let wrongAttempt = 0;

// while (wrongAttempt < 3) {
//   let userEnterPassword = "123"; // simulate wrong input
//   if (userEnterPassword === password) {
//     console.log("Access Granted");
//     break;
//   } else {
//     console.log("Wrong Password");
//     wrongAttempt++;
//   }
// }

// if (wrongAttempt === 3) {
//   console.log("Access Blocked");
// }

let password = "12345";
for (let attempts = 1; attempts <= 3; attempts++) {
  let userInput = "12345";
  if (userInput === password) {
    console.log("Access Granted");
    break;
  } else {
    console.log(`Wrong Password and attempt is ${attempts}`);
  }
  if (attempts === 3) {
    console.log("Access Blocked");
  }
}
