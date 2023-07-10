// * array  (An array stores multiple values in one single variable)
let testingArray = ["Hello Mello", 123, 2.14, true, "Hi there"];
let array = ["Hello Mello", 123, 2.14, true, ["apple", "banana", "orange"]];

console.log(testingArray); // array(5)
console.log(testingArray[2]); // 2.14

console.log(array[0]); // "Hello Mello
console.log(testingArray[4]); // "Hi there"
console.log(array[3]); // true

// * indexed array  ( indexed number => value )
let cars = ["BMW", "Toyota", "KIA", "Volvo"];
console.log(cars[2]); // "KIA"

let numbers = [];
console.log(numbers); // []

numbers[0] = 10;
console.log(numbers); // array(1)

numbers[1] = 20;
numbers[2] = 30;
numbers[3] = "40";

console.log(numbers); // array(4)[10,20,30,"40"]

let integers = [];
console.log(integers); // []

integers[0] = 5;
integers[1] = 10;
// skip indexed
integers[3] = 20;

console.log(integers); // array(4) [5, 10, empty, 20]

integers[integers.length] = 40; // last indexed + 1
console.log(integers); // array(5) [5, 10, empty, 20, 40]

integers[99] = 100;
integers[integers.length] = 200;
console.log(integers); // array(101) [5, 10, empty, 20, 40, empty × 94, 100, 200]

// * length
console.log(integers.length); // 101
console.log(numbers.length); // 4
console.log(testingArray.length); // 5

// * associative array ( key => value)
let mySelf = {
  name: "Destiny",
  age: 23,
  job: "developer",
};
console.log(mySelf["name"]); // Destiny
console.log(mySelf.job); // developer

let age = {
  Peter: 21,
  Harry: 19,
  Joe: 26,
  Clare: 23,
};
console.log(age["Joe"]); // 26

age["Nicky"] = 24;
age.John = 30;
console.log(age); // {Peter: 21, Harry: 19, Joe: 26, Clare: 23, Nicky: 24, John: 30}

let users = {
  Peter: {
    age: 21,
    gender: "male",
    job: "designer",
  },

  Clare: {
    age: 23,
    gender: "female",
    job: "developer",
  },
};

console.log(users); // {Peter: {…}, Clare: {…}}
console.log(users["Peter"]["job"]); // designer
console.log(users.Clare.gender); // female

// * array in string

let self = ["Aung Aung", 21, "designer"];
console.log(`${self[0]} is ${self[1]} years old. He is a ${self[2]}.`); // Aung Aung is 21 years old. He is a desginer.

let aboutMe = { name: "Hla Hla", job: "teacher" };
console.log(`${aboutMe["name"]} is a ${aboutMe["job"]}`); // Hla Hla is a teacher
console.log(aboutMe["name"] + " is a " + aboutMe["job"]); // Hla Hla is a teacher

// push & pop
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
var simpleArr = arrayBuilder("apple", "pear", "plum");
console.log(simpleArr); // ['apple','pear','plum']

simpleArr.pop();
console.log(simpleArr);
