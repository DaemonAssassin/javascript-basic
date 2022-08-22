// copying object
const student = {
  name: "Mateen",
  age: 22,
  rollNo: 29,
};

const student2 = {};
for (let key in student) {
  student2[key] = student[key];
}

console.log(student2);

// 2nd way
const student3 = Object.assign({}, student);
console.log(student3);

//* Object.assign(targetObject, sourceObjects[])
//* Used to copy source objects properties to target object and return
//* targetObject.
