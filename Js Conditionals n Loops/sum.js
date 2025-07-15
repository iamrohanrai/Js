let myArray = [1, 5];

function add(Array) {
  let result = 0;
  for (let i = 0; i < Array.length; i++) {
    result = result + Array[i];
  }
  return result;
}
console.log(add(myArray));
