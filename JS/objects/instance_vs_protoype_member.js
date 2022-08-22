function Person(age) {
  this.age = age;
}

const person = new Person(22);
Person.prototype.work = function () {
  console.log("work");
};
console.log(person);

person.work();

console.log(Object.getPrototypeOf(person));
