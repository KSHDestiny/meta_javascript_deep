// * JavaScript starts from the object itself when looking for properties to work with
// * If it can't find it on itself, it looks up to its prototype.

var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

var eagle = Object.create(bird);
console.log(eagle);
console.log("Eagle has wings:", eagle.hasWings);
console.log("Eagle can fly:", eagle.canFly);
console.log("Eagle has feathers:", eagle.hasFeathers);

var penguin = Object.create(bird);
penguin.canFly = false;
console.log(penguin);
console.log("Penguin has wings:", penguin.hasWings);
console.log("Penguin can fly:", penguin.canFly);
console.log("Penguin has feathers:", penguin.hasFeathers);
