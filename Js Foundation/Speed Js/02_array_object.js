const chaiTypes = ["Masala", "Ginger", "Green", "Lemon"];
console.log(chaiTypes[1]);
console.log(`Total chai types: ${chaiTypes.length}`); // always treat array ki aapko nahi pata uske andar kitni values aayengi;

// chaiTypes.push("Herbal"); //push value at the "last" of the array
// console.log(chaiTypes);

let popedvalue = chaiTypes.pop(); // pop the last value of the array and return that pop value
console.log(chaiTypes);
console.log(popedvalue);

let index = chaiTypes.indexOf("Lemon");
console.log(index); // -1 kyuki lemon pop ho gaya hai, and jab kuch nahi rehta toh -1 return hota

chaiTypes.forEach((chai, index) => {
  console.log(`${index + 1}: ${chai}`);
});

let moreChaiTypes = ["Oolong Tea", "White Tea"];
let allChaiTypes = chaiTypes.concat(moreChaiTypes); // method 1 to add array
let newChaiTypes = [...chaiTypes, "Chamolina Tea", ...moreChaiTypes];
// console.log(newChaiTypes);

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown Sugar",
    spices: ["Dalchini", "Ginger"],
  },
  instruction: "Boil Water, Add Tea Leaves, Milk, Sugar And Spices",
};
console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
  ...chaiRecipe,
  instruction: "Boil Water, Add Tea Leaves, Sugar, Spices, with Some Love",
};
console.log(updatedChaiRecepie);

let { name, ingredients } = chaiRecipe; // chairecipe ke andar property hai name so idhar name variable pe assign hua, yaha pe mapping hua hai jo object pe kr skte hai, agar nahi hota name property toh undefined aata
let [firstChai, secondChai] = chaiTypes; // ismai secondchai toh chaitype pe hai nahi so jo letter second sequence pe hai wo assign ho gaya
console.log(ingredients);
console.log(secondChai);
