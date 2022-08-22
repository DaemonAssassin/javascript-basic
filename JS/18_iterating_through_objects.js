const person = {
  name: "Mateen",
  age: 22,
};

// for (let key in person) console.log(key, person[key]);
let entries = Object.entries(person);
for (let entryArray of entries) {
  for (let entry of entryArray) console.log(entry);
}
