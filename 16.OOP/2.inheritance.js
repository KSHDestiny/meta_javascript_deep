class Car {
  // * constructor function is used to accept parameters
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log("turbo is on!", this.color);
  }
}

class Toyota extends Car {
  name = "Toyota";
  carDetail() {
    console.log(
      `This ${this.name} has ${this.color} color and its speed is ${this.speed} mph.`
    );
  }
}

// * The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
class BMW extends Car {
  constructor(name, itsColor, speed) {
    super(itsColor, speed);
    this.name = name;
  }

  carDetail() {
    super.turboOn();
    console.log(
      `This ${this.name} has ${this.color} color and its speed is ${this.speed} mph.`
    );
  }
}

let toyota = new Toyota("blue", 90);
console.log(toyota.color, toyota.speed); // blue 90
toyota.carDetail(); // This Toyota has blue color and its speed is 90 mph.

let bmw = new BMW("BMW", "red", 120);
console.log(bmw.color, bmw.speed); // red 120
bmw.carDetail(); // turbo is on! red // This BMW has red color and its speed is 120 mph.

// * Other Example
// Example 1
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    // * the toggleLights() method behaves differently on the HighSpeedTrain class than it does on the Train class.
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}

var myFirstTrain = new Train("red", false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);

var train4 = new Train("red", false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// Example 2
class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
    this.treadmill = new Treadmill(treadmillPos, 5);
  }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs); // 7-22
console.log(boxingGym.stationaryBike); // StationaryBike { position: 'right corner', gears: 8 }
console.log(boxingGym.treadmill); // Treadmill { position: 'left corner', modes: 5 }
