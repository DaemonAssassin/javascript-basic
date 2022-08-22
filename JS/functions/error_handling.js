const person = {
  firstName: "Mateen",
  lastName: "Mehmood",
  age: 22,
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    if (typeof name !== "string") {
      throw new Error("name is not a String");
    }

    parts = name.split(" ");

    if (parts.length !== 2) {
      throw new Error("Name is less than two words");
    }

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (error) {
  console.log(error);
}
