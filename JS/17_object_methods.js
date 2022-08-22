//! assign
//* Object.assign(targetObject, sourceObjects[])
//* -> Used to copy sourceObjects properties to targetObject and return it.

const person = {
  name1: "Mateen",
  age1: 22,
};
const person2 = {
  name2: "Mubeen",
  age2: 19,
};

const newPerson = Object.assign({}, person, person2);
// console.log(newPerson);

//* call()
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const callPerson = Person.call({}, "Mateen", 22);
console.log(callPerson);
