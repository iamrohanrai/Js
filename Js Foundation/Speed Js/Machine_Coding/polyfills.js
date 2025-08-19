// Polyfills - agar koi functionality browser ke pass nahi hai toh you write the functionality of it and this is called polyfills
// built in functionality ka custom implementation krna

// FOREACH
/*
SIGNATURE OF ORIGINAL FUNCTIONALITY
  = ARRAY KE HAR ELEMENT KE LIYE CB KO RUN KRTA HAI



*/
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i); // current value and index diye hai
    }
  };
}
const arr = [1, 2, 3, 4, 5];
arr.myForEach((value, index) => {
  console.log(`At index: ${index} Value is: ${value}`);
});

// MAP

/*
MAP EK FUNCTION HAI CB LETA HAI AND FOR EVERY ELEMNET CALLBACK KO RUN KRTA HAI
AND NEW ARRAY RETURN KRTA HAI JO BHI HAR ITERATION KO RETURN KRTA CB WO PART BAN JATA NEW ARRAY KA
*/

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i);
      result.push(value);
    }
    return result;
  };
}

const trippledArray = arr.myMap((e) => e * 3);
console.log(trippledArray);

// REDUCE

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue) {
    if (!initialValue) {
      let accumulator = this[0];
      for (let i = 1; i < this.length; i++) {
        accumulator = cb(accumulator, this[i]);
      }
      return accumulator;
    } else {
      let accumulator = initialValue;
      for (let i = 0; i < this.length; i++) {
        accumulator = cb(accumulator, this[i]);
      }
      return accumulator;
    }
  };
}
