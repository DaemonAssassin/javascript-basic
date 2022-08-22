function getCar(color, model, build) {
  return {
    color: color,
    //if the name and parameter is same you can make this one like below
    model,
    build,
    name: "Mateen",
  };
}

const car1 = getCar("orange", "2022", "Ferrari");
console.log(car1.color);
console.log(car1.model);
console.log(car1.build);
console.log(car1.name);

//! you can add properties to object at runtime
// adding ppty
car1.country = "Pakistan";
car1.doors = 4;
// adding method
car1.applyBrakes = function () {
  console.log("Apply Brakes");
};
console.log(car1);

//! you can also delete ppties from object at runtime
delete car1.applyBrakes;
delete car1.color;
console.log(car1);
console.log(car1.constructor);

// Iterating over objects
let obj = {
  age: 22,
  name: "Mateen",
};

for (let key in obj) {
  console.log(key, obj[key]);
}

for (let object of Object.entries(obj)) {
  console.log(object);
}
