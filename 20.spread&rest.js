// * Spread Operator "..." (spread out array items and join objects together) // unpack the box
let fruits = ["apple", "banana", "mango", "orange"];

function favoriteFruit(...favorites) {
  console.log(favorites); // [ [ 'apple', 'banana', 'mango', 'orange' ] ]

  let myFavoriteFruits = favorites[0];
  for (let fruit of myFavoriteFruits) {
    console.log(`I like ${fruit}.`);
  }
}
favoriteFruit(fruits);

// ! string to an array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// ! Copy either an object or an array into a separate one
// ! copy object
const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = { ...car1 };
car1.speed = 201;
console.log(car1, car2, car1.speed, car2.speed); // { speed: 201, color: 'yellow' } { speed: 200, color: 'yellow' } 201 200

// ! copy array
const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2); // [ 'apples' ] not [ 'apples', 'pears' ]

// * Rest Operator or Rest Parameter "..." // build a small box to pack items into it
let food = ["pizza", "hamburger", "ice-cream", "donut", "hotpot"];
let [myFavorite1, myFavorite2, ...otherFood] = food;
console.log(`My favorites are ${myFavorite1} and ${myFavorite2}.`);
console.log(otherFood);

// ! Join arrays
fruits = ["apple", "pear", "plum"];
let berries = ["blueberry", "strawberry"];
let fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

// ! Join objects
let flying = { wings: 2 };
let car = { wheels: 4 };
let flyingCar = { ...flying, ...car };
console.log(flyingCar); // {wings: 2, wheels: 4}

// ! Using Rest parameter instead of using push() method in array
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies); // ['onion', 'parsley', 'carrot', 'beetroot']
