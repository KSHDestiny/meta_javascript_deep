const car = {
  engine: true,
  sterring: true,
  speed: "slow",
};
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log(sportsCar);

// * for-in is unreliable since it iterate over object and its Prototype!
console.log("%cThis is for-in loop.", "color: red");
for (prop in sportsCar) {
  console.log(prop + ": " + sportsCar[prop]);
}

// * for-of is reliable since it iterate over object's own Properties only!
console.log("%cThis is for-of loop.", "color: red");
for (prop of Object.keys(sportsCar)) {
  console.log(prop + ": " + sportsCar[prop]);
}
