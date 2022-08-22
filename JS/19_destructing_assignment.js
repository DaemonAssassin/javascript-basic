//* with iterable
const array = ["mateen", "mubeen", "zain"];
let [user1, , user2] = array;
console.log(user1);
console.log(user2);

const personName = "Mateen";
let [a, b, c, d, e, f] = personName;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//* with objects
const person = {
  age: 22,
  rollNo: 29,
  address: "BWP",
};

let { age, rollNo } = person;
console.log(age);
console.log(rollNo);
