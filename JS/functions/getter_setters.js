const person = {
  firstName: "Mateen",
  lastName: "Mehmood",
  age: 22,
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    completeName = name.split(" ");
    this.firstName = completeName[0];
    this.lastName = completeName[1];
  },
};

person.fullName = "Hamza Usmani";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
