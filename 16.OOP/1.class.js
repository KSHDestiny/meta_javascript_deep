class Car {
  // constructor function is used to accept parameters
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log("turbo is on!");
  }
}

car1 = new Car("red", 120);
console.log(car1.color, car1.speed);
car1.turboOn();

car2 = new Car("yellow", 80);
console.log(car2.color, car2.speed);
car2.turboOn();
