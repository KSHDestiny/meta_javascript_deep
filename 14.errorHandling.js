// try{
//      throw new Error();
// }catch(error){
//     do something
// }

try {
  console.log(x);
  //   throw new ReferenceError();
} catch (error) {
  console.dir(error.stack);
}

console.log("This code is running");

try {
  (5).pop();
  //   throw new TypeError();
} catch (error) {
  console.dir(error.stack);
}

console.log("This code is running");

// ! Syntax can't be caught

// * Exercises
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("The first Argument is not a number.");
    } else if (typeof b != "number") {
      throw new ReferenceError("The second Argument is not a number.");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log(err);
  }
}
addTwoNums(5, "5");
console.log("It still works");
