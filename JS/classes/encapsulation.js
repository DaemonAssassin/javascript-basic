// class Car {
//   #model = 2022;
//   get model() {
//     return this.#model;
//   }
// }

// const car = new Car();
// console.log(car.model);

function Shape(name) {
  this.name = name;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(2);
console.log(circle);
