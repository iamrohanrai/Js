function prepareChai(Teatype) {
  if (typeof Teatype !== "string") {
    console.log("Enter data in string");
  } else {
    const tea = Teatype.toLowerCase();
    if (tea === "masala chai") {
      console.log("Adding Spices to the chai");
    } else {
      console.log("Preparing regular chai");
    }
  }
}
// prepareChai("Masala Chai");
// prepareChai("Masala-Chai");
// prepareChai(42);

/*
ek online store mein, agar customer ka total bill amount 1000 se zyada hai toh 10% discount milta hai, full amount pay krna padega
*/

function calculateTotalBill(amount) {
  // convert it to number cause i dont know string aaraha ya number
  let amountInNum = +amount; // converted it to number if string coming
  if (amountInNum > 1000) {
    return `Amount to Pay After Discount: ${amountInNum * 0.9}`;
  } else {
    return amountInNum;
  }
}
console.log(calculateTotalBill("1500"));

/*
ek traffic light system mein agar light "red" hai, toh "stop" print karo. agar yellow hai toh slow down print karo agar green hai toh "go" print karo.
*/
function trafficLight(light) {
  switch (light) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow Down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Go");
      break;
  }
}
// break ke jagah return bhi likhte hai programmers, kaam same hi rehta
trafficLight("green");

function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}
checktruthyValue(null); // falsy
checktruthyValue(undefined); // falsy
checktruthyValue(""); // falsy
checktruthyValue(0); // falsy
checktruthyValue([]); // truthy

function login(username, password, email) {
  if (
    (username === "admin" || email === "rohan@gmail.com") &&
    password === "12345"
  ) {
    console.log("login successful");
  } else {
    console.log("invalid condition");
  }
}
