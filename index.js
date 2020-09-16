/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const alice = new Person("Alice", 35);
alice.eat("potatoes");
console.log(alice.stomach);
alice.poop();
console.log(alice.stomach);
console.log(alice.toString());

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  this.drive = function (distance) {
    if (this.tank - distance / this.milesPerGallon <= 0) {
      this.odometer += this.tank * this.milesPerGallon; //adding remaining miles you can drive to odometer
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    } else {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    }
  };
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

const prius = new Car("Prius", 35);
prius.fill(20);
prius.drive(750);
console.log(prius);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};
Baby.prototype.burp = function () {
  console.log(`The baby burps all over you.`);
};

const daddy = new Baby("Joe", 35, "plane");
daddy.play();
daddy.eat("taco");
daddy.burp();
console.log(daddy);

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. in global scope 'this' is bound to the window (unless in strict mode)
  2. when preceding a function call with a dot, the object before the dot is bound to 'this'
  3. when used in a constructor function, the 'this' is bound to each 'new' object created
  4. .call/.apply/.bind create new bindings for 'this' that can override existing ones
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
