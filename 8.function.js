// statement        // expression

//  * statement
// unit of code that performs an action or a sequence of action

//  * expression
// combination of variables, operators, functions that produce a single value

// let value = 10 + 20;

// let num1 = 20;
// let num2 = 30;

// console.log(10 + 20);   // 30
// console.log($num1 + $num2);     // 50

// * function
// function functionName() {
//     statement;
// }
// functionName();

// * user defined function
function writeMsg() {
  console.log("This is testing message");
}
writeMsg(); // This is testing message

function testing() {
  console.log("Hello Mello");
  console.log(10 + 20);
}
testing(); // Hello Mello   // 30
writeMsg(); // This is testing message

// * arguments function
// ! one argument function
let name;
function myName(name) {
  console.log(name);
  console.log(`My name is ${name}.`);
}

myName("Destiny"); // Destiny  // My name is Destiny.
myName("Aung Aung"); // Aung Aung  // My name is Aung Aung.

// ! two argument function
let x, y;
function sum(x, y) {
  let result = x + y;
  console.log(result);
}

sum(20, 30); // 50
sum(100, 200); // 300

// ! default argument function
let a, b;
function sub(a = 50, b = 10) {
  console.log(a - b);
}

sub(50, 20); // 30

// * scope
let fruitName = "Mango";

function fruit() {
  let fruitName = "Apple";
  console.log("Inside " + fruitName);
}

fruit(); // Inside Apple
console.log("Outside " + fruitName); // Outside Mango

// * void function (not return value, return NULL)

// * type function
function test() {
  let result = 20 + 30;
  return result;
}

console.log(test()); // test() = 50;
console.log(150 - test()); // 100

// type function (deeper)
let int1, int2;
function output(int1, int2) {
  console.log("Hello Mello");
  console.log("Hi there");
  let add = int1 + int2;
  return add;
}

console.log(output(20, 30)); // "Hello Mello"    // "Hi There"   // value = 50(unseen)

// console.log("Hello Mello");
// console.log("Hi there");
// output() = 300;

let num;
function multiple8(num) {
  return num * 4;
}

let int;
function multiple2(int) {
  return int * 2;
}

console.log(multiple8(multiple2(10))); // 80

// function greeting(){
//     console.log("Hello Mello");
// }
// greeting();

// * anonymous function
let fun = function () {
  console.log("Hello");
};
fun(); // Hello

// * IIFE ()  // Immediately Invoked function expression
(function () {
  console.log("Hello Mello Aung Aung");
})(); // Hello Mello Aung Aung

let num1, num2;
(function (num1 = 100, num2 = 200) {
  console.log(num1 + num2);
})(500, 1000); // 1500

// let greeting = function(){
//     console.log("Hello Mello Aung Aung");
// };
// greeting();

// * closure function
function outside() {
  console.log("This is outside");
  function inside() {
    console.log("This is inside");
  }
  inside(); // This is inside
}
outside(); // This is outside

// Recursion (calling itself)
var count = 3;
function recursion() {
  count--;
  console.log("This is recursion function");
  if (count > 0) {
    recursion();
  }
}

recursion();
