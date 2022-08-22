function Vehicle() {
  this.vehicle = "car";
}

Vehicle.prototype.vehicleBuild = "2022";
Vehicle.prototype.vehicleMove = function () {
  console.log("move");
};

function Car() {}

Car.prototype = Object.create(Vehicle.prototype);
console.log(Object.create(Vehicle.prototype));
Car.prototype.constructor = Car;
Car.prototype.carYear = "2K22";

function Elantra(number) {
  this.number = number;
}

Elantra.prototype = Object.create(Car.prototype);
Elantra.prototype.constructor = Elantra;
Elantra.prototype.go = "go";

const car = new Elantra("MN 1675");
console.log(car);
