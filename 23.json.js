// * json is a string

// * JSON to JavaScript
const jsonStr = '{"greeting":"hello"}';
const plainJS = JSON.parse(jsonStr);
console.log(plainJS);

// * JavaScript to JSON
const aboutMe = {
  name: "Destiny",
  age: 23,
  job: "Developer",
};
const meJson = JSON.stringify(aboutMe);
console.log(meJson);

// ! JavaScript object can hold functions but JSON can't
const test = {
  num: 10,
  add() {
    console.log("This is adding");
    return 15;
  },
};
console.log(test); //{ num: 10, add: [Function: add] }
const testJSON = JSON.stringify(test);
console.log(testJSON); // {"num":10}

// ! JSON doesn't allow to use JavaScript Comment
