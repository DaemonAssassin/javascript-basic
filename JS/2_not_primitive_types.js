//* 1. Objects
//* 2. Arrays
//* 3. Functions


//! Objects
let person = {
    name: 'Mateen',
    age: 22,
    car: 'Tesla'
};
//changing value in object
person.age = 21;
person['name'] = 'Mehmood';
console.log(person);

//! Arrays
let selectedCars = ['Elantra', 'Civic', 'Porsche', 'Tesla'];
selectedCars[2] = 3;
// both length and type is dynamic
console.log(selectedCars);

//! Functions
function printText(name, age) {
    console.log(name + ' | ' + age);
}
printText('Mateen', 22);
