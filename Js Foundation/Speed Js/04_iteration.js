let salesData = [
  { product: "laptop", price: 12000 },
  { product: "smartphone", price: 8000 },
  { product: "headphone", price: 500 },
  { product: "keyboard", price: 700 },
];

// let totalsales = ?
let initialValue = 0;
let totalsales = salesData.reduce(
  (accumulator, sale) => accumulator + sale.price,
  initialValue
);
console.log(totalsales);

let inventory = [
  { name: "widget A", stock: 30 },
  { name: "widget B", stock: 130 },
  { name: "widget C", stock: 45 },
  { name: "widget D", stock: 20 },
];
// lowstockitems less than 50;
let lowstockitems = inventory.filter((item) => {
  return item.stock < 50; // return nahi likhoge toh atleast empty array milega
});
console.log(lowstockitems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user using reduce
let mostActiveUser = userActivity.reduce((maxUser, currentUser) => {
  return currentUser.activityCount > maxUser.activityCount
    ? currentUser
    : maxUser;
});
console.log(mostActiveUser);

/* REDUCE METHOD POINTS 

Agar initial value nahi di aur array khali ho, to error aayega.

Agar initial value di (chahe array khali ho) to woh hi final result ban sakta hai (callback ek baar bhi na chale).

1. Empty array + reduce bina initial value ke → error
const arr = [];
// Koi initial value nahi di, to yeh crash karega
try {
  const result = arr.reduce((a, b) => a + b);
  console.log("Result:", result);
} catch (e) {
  console.log("Error:", e.message); // TypeError: Reduce of empty array with no initial value
}
Kya hua:
reduce ko shuru mein accumulator ke liye koi value nahi mili, to woh array ka first element lene ki koshish karta — lekin array khali hai, isliye error aata hai.

2. Empty array + reduce with initial value → wahi initial value return hoti hai
const arr = [];
const result = arr.reduce((a, b) => a + b, 10);
console.log(result); // 10
Kya hua:
Array khali hai, to callback ek baar bhi nahi chalta. reduce seedha initial value (10) return karta hai.

3. Non-empty array se difference dikhane ke liye (numbers ka sum)
const nums = [2, 3, 5];

// bina initial ke
const sum1 = nums.reduce((a, b) => a + b); // 2 + 3 + 5 = 10

// initial = 10 ke saath
const sum2 = nums.reduce((a, b) => a + b, 10); // 10 + 2 + 3 + 5 = 20

console.log(sum1); // 10
console.log(sum2); // 20
4. Objects ke saath (most active user) — empty list ka safe handling
const userActivity = [];

// bina initial ke — error (same reason: array khali)
try {
  const mostActive = userActivity.reduce((max, cur) =>
    cur.activityCount > max.activityCount ? cur : max
  );
  console.log(mostActive);
} catch (e) {
  console.log("Error:", e.message);
}

// safe way: shape-match karta initial value do
const safeMostActive = userActivity.reduce(
  (max, cur) => (cur.activityCount > max.activityCount ? cur : max),
  { user: null, activityCount: -Infinity }
);
console.log(safeMostActive); 
// Output: { user: null, activityCount: -Infinity }
Kya hua:

Pehle case me array khali hai, to reduce ko koi start point nahi milta → error.

Dusre case me humne safe initial diya jo structure match karta hai; array khali hone par wahi initial return hota.


*/
