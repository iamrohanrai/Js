// Create an array containing differnt type of teas
const teas = [
  "green tea",
  "black tea",
  "oolang tea",
  "white tea",
  "herbal tea",
];
console.log(`length is ${teas.length}`);

// Problem: add "chamomile tea" to the existing list of teas
teas.push("chamomile tea");

// Problem: Remove "oolang tea from the list of tea"
const index = teas.indexOf("oolang tea");
if (index > -1) {
  teas.splice(index, 1);
}
// console.log(teas);

// problem: filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter((tea) => tea !== "herbal tea");

// problem: sort the list of teas in alphabetical order
teas.sort();

// problem: use a for loop to print each type of tea in the array
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// problem: use a for loop to count how many teas are caffeinated excluding herbal tea
let count = 0;
for (let i = 1; i < teas.length; i++) {
  if (teas[i] !== "herbal tea") {
    count++;
  }
}

// problem: use a for loop to create a new array with all the names in upper case
const uppercaseTea = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTea.push(teas[i].toUpperCase());
}

// problem: use a for loop to find tea name with most characters
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}
console.log(`Longest tea is ${longestTea}`);

// problem: use a for loop to reverse the order of teas in the array
const reverseArray = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reverseArray.push(teas[i]);
}
