//Factory Function
function createPerson(name, age) {
  return {
    name,
    age,
    show() {
      console.log("person");
    },
  };
}

const person1 = createPerson("Mateen", 22);
const person2 = createPerson("Mubeen", 19);
console.log(person1.name);
console.log(person1.age);
console.log(person2.name);
console.log(person2.age);

for (let key in person1) console.log(key);
