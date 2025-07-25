// Diff b/t method and function
// function standalone hai toh usko ek function bolte lekin function object ke andar define hai toh usko method bolte

const obj1 = {
  fname: "Rohan",
  lname: "Rai",
  getfullname: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "ayush",
  lname: "soni",
};

// DRY - DONT REPEAT YOURSELF
obj2.__proto__ = obj1;
obj1.__proto__ = null;
console.log(obj2.getfullname());
console.log(obj1.getfullname());
console.log(obj2.toString());

// Prototype inheritance

/*

const arr = [1, 2];
Yeh arr ek array hai, lekin JavaScript mai inheritance ke wajah se arr ke paas Array ke prototype ke methods ke saath-saath Object ke methods bhi available hote hain.

Prototype Chain:
arr --> Array.prototype --> Object.prototype --> null
Toh jab tum arr.someMethod() likhte ho:

Pehle check hota hai arr khud ke paas someMethod hai kya?

Nahi mila? Toh check hota hai Array.prototype ke andar.

Wahan bhi nahi? Toh check hota hai Object.prototype ke andar.

Uske baad null aata hai, jahan chain khatam ho jaati hai.

✅ Example:
const arr = [1, 2, 3];

// Object ka method:
console.log(arr.hasOwnProperty("length")); // true

// Object ka dusra method:
console.log(arr.toString()); // "1,2"

// Array ka method:
console.log(arr.map(x => x * 2)); // [2, 4, 6]
Yahan hasOwnProperty() aur toString() dono Object.prototype ke methods hain. Fir bhi arr par kaam karte hain.

🔑 Conclusion:
✅ Haan, tum array par object ke methods use kar sakte ho, kyunki JavaScript mai har array internally ek object hi hota hai, aur inheritance ke zariye Object.prototype tak access hota hai.

*/
