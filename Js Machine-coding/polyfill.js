const arr = [1, 2, 3, 4, 5];

// error = .foreach function does not exist on arr variables
// foreach - polyfill

/*
step 1 = real signature ko samjho
arr.foreach(function(value,index){
    console.log(`value at index ${index} is ${value})
})
// no return, function leta hai as a parameter and  function ka parameter value and index hai
and calls my function for every value
*/
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userfunction) {
    const originalArr = this; // current object ki taraf point krta hai
    for (let i = 0; i < originalArr.length; i++) {
      userfunction(originalArr[i], i);
    }
  };
}

// map
/*
real signature
return krta hai new array and each element pe iterate krta hai, userfn ke according
*/
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userfn) {
    const resultNewArray = [];
    for (let i = 0; i < this.length; i++) {
      const newValue = userfn(this[i], i);
      resultNewArray.push(newValue);
    }
    return resultNewArray;
  };
}

//filter method
/*

return krta new array, input mai user ka function leta
aur agar user ka function true return krta hai toh current value ko new array mai include kr leta hai

*/
// const n3 = arr.filter((e) => e % 2 == 0);
// console.log(n3);
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}
const n4 = arr.myFilter((e) => e % 2 == 0);
// console.log(n4);
