const person = {
  name: "Mateen",
  age: 22,
};

person.rollNo = 29;
person.work = function () {
  console.log("Work");
};

delete person.work;

console.log(person);
console.log(person.constructor);
