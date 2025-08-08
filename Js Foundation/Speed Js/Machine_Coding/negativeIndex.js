// const user = {
//   name: "Rohan",
//   age: 40,
//   password: "12345",
// };
// const proxyUser = new Proxy(user, {
//   get(target, prop) {
//     // console.log(target);
//     if (prop === "password") {
//       throw new Error("Access Denied");
//     }
//     return target[prop];
//   },
// });
// console.log(proxyUser.password);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr[-1]); // I need negative indexing;
function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop); // to be 100% sure ki number hi aaya hoga
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true; // confirmation bheje hai ki set ho gaya hai
    },
  });
}
let newArr = negativeIndex(arr);
console.log(newArr[-1]);
console.log(arr);

newArr[-1] = 20;
console.log(newArr[-1]);
console.log(newArr);
console.log(arr);
