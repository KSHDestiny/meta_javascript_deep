// * foreach(callbackFn, thisArg)
// ! callbackFn(element,index,array)
const fruits = ["kiwi", "mango", "apple", "pear"];
// function appendIndex(fruit, index) {
//   console.log(`${index}. ${fruit}`);
// }
// fruits.forEach(appendIndex);
fruits.forEach((fruit, index, array) => {
  console.log(`Index ${index} in ${array} is ${fruit}`);
});

// ! thisArg
var myObject = { name: "myObject" };

// todo arrow function
[1, 2].forEach((item) => {
  console.log(this === myObject, this); // false  Window {}
}, myObject);

// todo anonymous function
[1, 2].forEach(function (item) {
  console.log(this === myObject, this); // true  {name: "myObject"}
}, myObject);

// todo simple function
function annoFunc(item) {
  console.log(this === myObject, this); // true  {name: "myObject"}
}
[1, 2].forEach(annoFunc, myObject);

// ! Working with Object
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result); // ['speed',100,'color','yellow']

// * filter(callbackFn, thisArg)
const nums = [0, 10, 20, 30, 40, 50];
let filterNum = nums.filter(function (num) {
  return num > 20;
});
console.log(filterNum); // [30,40,50]

// * map(callbackFn, thisArg)
let mapNum = nums.map(function (num) {
  return num / 10;
});
console.log(mapNum); // [0,1,2,3,4,5]

// ! Working with Map Object
// ? it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
console.log(bestBoxers.get(1)); // 'The Champion'

// * Set Object
// ? filter an array for unique members
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // {'apple', 'pear', 'plum'}

// ! Set to Array
let arrFruits = [];
uniqueFruits.forEach((element) => {
  arrFruits[arrFruits.length] = element;
});
console.log(arrFruits);
