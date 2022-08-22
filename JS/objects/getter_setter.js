function Person(age, rollNo) {
  let fee = "30,000";
  this.age = age;
  this.rollNo = rollNo;
  this.name = "Mateen";

  Object.defineProperty(this, "fee", {
    get: () => fee,
    set: (value) => (fee = value),
  });
}

const person = new Person(22, 29);
person.fee = "40,000";
console.log(person.fee);
