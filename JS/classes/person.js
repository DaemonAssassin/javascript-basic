class Person {
  constructor(age) {
    this.age = age;
    this.go = function () {
      console.log("go");
    };
  }
  work() {
    console.log("working");
  }
}

const person = new Person(22);
console.log(person);
