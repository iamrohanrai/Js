const obj = { x: 1 };
obj.x;

// Dot operator object ke properties ko access krne mai help krta

// Prototype
Object.prototype.chai = function () {
  console.log("This is chai");
};
obj.chai();

// polyfills - these are like a backup functions
const arr = [1, 2, 3];
if (!Array.prototype.fill) {
  // fallback - polyfill
  Array.prototype.fill = function () {};
}
arr.fill();
