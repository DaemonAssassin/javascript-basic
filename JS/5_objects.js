//! creating an object
const circle = {
  color: "green",
  location: {
    x: 1,
    y: 1,
  },
  width: 10.0,
  draw: function () {
    console.log("Draw");
  },
};

circle.draw();

//! factory functions
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(10);
console.log(circle1.radius);
circle1.draw();
const circle2 = createCircle(20);
console.log(circle2.radius);
circle2.draw();

//! Constructor Functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw circle");
  };
}

const circle3 = new Circle(20);
console.log(circle3.radius);
circle3.draw();

//! practice
//* factory function
function getSquare(side) {
  return {
    side,
    color: "blue",
    draw() {
      console.log(this.side * side);
    },
  };
}

const square = getSquare(10);
square.draw();

//! constructor functions
function Square(side) {
  this.side = side;
  this.color = "orange";
  this.draw = function draw() {
    console.log("Hello world" + side);
  };
}

const sq = new Square(3);
sq.draw();
console.log(sq.side);
console.log(sq.color);
