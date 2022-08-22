function Shape() {}
Shape.prototype.draw = function () {
  console.log("draw");
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.move = function () {
  console.log("Move");
};
