// * Array are iterable
let array = ["apple", "mango", "banana"];

for (item of array) {
  console.log(item); // apple    // mango    // banana
}
console.log(array[1]);

// * String are iterable
let string = "Destiny";

for (item of string) {
  console.log(item); // D    // e    // s    // t    // i    // n    // y
}
console.log(string[3]);
