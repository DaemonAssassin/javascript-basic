//! Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(10);
//? new operator do 3 things
//* 1 -> It create an empty object (like, {})
//* 2 -> Then it dynamically add properties in this empty object.
//* (like, this.radius = radius)
//* 3 -> Then it return an object after adding properties
