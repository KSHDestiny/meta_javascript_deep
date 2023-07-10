// * Arithmetic Operators (+ ,- ,* ,/ ,% ,** )

var x = 3;
var y = 5;

console.log(x + y); // 8
console.log(y - x); // 2
console.log(x * y); // 15
console.log(x / y); // 0.6
console.log(x % y); // 3      // Remainder
console.log(x ** y); // 243  // Power

// * Assignment Operator (=, +=, -=, *=, /=, %=)
var num = 10;
console.log(num); // 10

x = 20;
x += 30; // x = x + 30
console.log(x); // 50

y = 50;
y -= 40; // y = y - 40
console.log(y); // 10

x = 5;
x *= 2; // x = x * 2
console.log(x); // 10

x = 10;
x /= 2; // x = x / 2
console.log(x); // 5

y = 10;
y %= 3; // y = y % 3
console.log(y); // 1

// * Increment / Decrement Operators (++ ,-- )

x = 10;
++x;
console.log(x); // 11

y = 5;
--y;
console.log(y); // 4

num = 5;
console.log(num--); // 5
console.log(num); // 4

// * Comparison Operators ( == , === , != , !== , > , < , >=, <=)
x = 10;
y = 20;
console.log(x > y); // false
console.log(x < y); // true

x = 10;
y = 20;
console.log(x >= y); // false

x = 30;
y = 30;
console.log(x <= y); // true

x = 100;
y = "100";
console.log(x == y); // true               // value
console.log(x === y); // false              // value + datatype

x = 20;
y = "20";
console.log(x != y); // false     // value
console.log(x !== y); // true     // value + datatype

// * Logical Operator       ( && , || , ! )
x = 100;
y = 50;

if (x == 100 && y == "50") {
  console.log("correct values");
}

if (x == 10 || y == 30) {
  console.log("there is correct answer.");
}

// * String Operators     ( .= )
var txt1 = "I am Destiny. ";
var txt2 = "He is Aung Aung";
txt1 += txt2; // txt1 = txt1 + txt2;
console.log(txt1); // I am Destiny. He is Aung Aung
console.log(txt2); // He is Aung Aung

// * Conditional Assignment Operator    (Ternary Operator)  ?
//  condition ? true (expression) : false (expression)

x = 100;
y = 50;
console.log(x == 50 || y == 50 ? "Correct Answer" : "Wrong Answer");

var int1 = 50;
var int2 = 20;
x == 100 && y === "50"
  ? (function (num1, num2) {
      console.log(num1 + num2);
    })(int1, int2)
  : (function (num1, num2) {
      console.log(num1 - num2);
    })(int1, int2);

// * typeof
let string = "Hello";
let number = 23;
let boolean = true;
let array = [1, 2, 3];
let obj = { name: "Destiny", age: 23 };
let func = function () {};
console.log(typeof string); // string
console.log(typeof number); // number
console.log(typeof boolean); // boolean
console.log(typeof array); // object
console.log(typeof obj); // object
console.log(typeof null); // object
console.log(typeof func); // function
