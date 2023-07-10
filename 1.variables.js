var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is:", petDog);
console.log("My pet cat's name is:", petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);
catSound = "meow";
console.log(petCat, "now says", catSound);

console.log("%c Hello Mello", "color: red;font-size: 50px");

// * var characteristics
// Can be used before it is declared
// Same variable can be redeclared.
// Can be scoped to a function, or globally     // ! let, const are scoped to a block

// console.log(name);
let name = "Destiny";

// block scope
if (true) {
  let name = "Aung Aung";
  console.log(name);
}

console.log(name);
