let key = "age";

const person = {
  name: "Mateen",
  [key]: 22,
  rollNo: 29,
};

console.log(person.age);

//! in operator
console.log(person.call === undefined);
console.log("car" in person);
