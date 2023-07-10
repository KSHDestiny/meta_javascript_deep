// String
let num = new String(15);
console.log(num); // ! object
// console.log(number.toString()); // ! string

// Function
let func = new Function("x", "y", "{console.log('Hello Mello'); return x+y}");
console.log(func(10, 20));

// RegExp
let string = "abcd";
let D = new RegExp(/D/, "i");
console.log(string.match(D));
// console.log("abcd".match(/d/)); // ['d', index: 3, input: 'abcd', groups: undefined]

// * Others
// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();
