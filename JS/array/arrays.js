const numbers = [1, 2];

//! 1 => Add element at the beginning of an array
//? unshift(...items: T[])
//* Inserts new elements at the start of an array,
//* and returns the new length of the array.
numbers.unshift(10, 11);

//! 2 => Add element at the end of an array
//? push(...items: T[])
//* Appends new elements to the end of an array,
//* and returns the new length of the array.
numbers.push(100, 101);

//! 3 => Add element in the middle of an array
//? splice(start: number, deleteCount: number, ...items: T[])
//* The number of elements to remove.
//* Removes elements from an array and, if necessary, inserts
//* new elements in their place, returning the deleted elements.
numbers.splice(2, 0, 0, 0);

//! search
//? indexOf()
console.log(numbers.indexOf(0, 3));
console.log(numbers.lastIndexOf(0));

//? find()
const courses = [
  { id: 1, title: "a" },
  { id: 2, title: "b" },
];

const course = courses.findIndex((course) => course.title == "a");

console.log(numbers);
console.log(course);

//? sort
// sort primitives
const ages = [2, 3, 1, 4];
console.log(ages.sort());

// sort reference types
const tuts = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
  // { id: 3, name: "Django" },
  // { id: 4, name: "Laravel" },
  // { id: 5, name: "Spring Boot" },
];

tuts.sort(function (a, b) {
  const nameA = a.name.toLowerCase;
  const nameB = b.name.toLowerCase;
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(tuts);
