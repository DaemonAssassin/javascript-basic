function Person() {
  this.name = "Mateen";
  this.age = 22;
  this.rollNo = 29;

  this.greet = function () {
    console.log("greet " + this.name);
  };
}

const p1 = new Person();
console.log(p1.name);
console.log(p1.age);
console.log(p1.rollNo);
p1.greet();
const p2 = new Person();

p1.car = "Tesla";
console.log(p1);

p2.drive = function () {
  console.log("Driving Elantra");
};

p2.drive();
console.log(p2.constructor);
