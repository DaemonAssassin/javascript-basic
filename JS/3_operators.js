//* 1. Arithmetic Operators
//* 2. Assignment & Compound Assignment Operators
//* 3. Relational / Comparison Operators
//* 4. Equality Operators
//* 5. Ternary Operator
//* 6. Logical Operators
//* 7. Logical Operators With Non-Booleans (Truthy | Falsy)
//* 8. Bitwise Operators


//? Arithmetic Operators
let x = 2;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y); // -> y^x // x to the power of y

//? Assignment & Compound Assignment Operators
let a = 3;
a += 3;
a -= 3;
a *= 3;
a /= 3;
a %= 3;

//? Relational / Comparison Operators
let age = 22;
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age === 18);
console.log(age !== 18);


//? Equality Operators
//* Strict Equality (Value + Type)
console.log(1 === 1);
//* Lose Equality (Value)
console.log(1 == '1');
// first after == '1' is converted to 1 and then compared
console.log('1' == 1);
// first after == 1 is converted to '1' and then compared
console.log('1' == 2);
// first after == 2 is converted to '2' and then compared
console.log(false == 0);
// first after == 1 is converted to true(>0 are true) and then compared
console.log(null == undefined);
// first after == undefined is converted null(no value) and then compared


//? Ternary Operator
let points = 100;
let type = points > 100 ? 'Gold' : 'Silver'; // type -> Silver


//? Logical Operators
//* 1. Logical AND (&&)
//* 2. Logical OR (||)
//* 3. Logical NOT (!)
//! 1. AND (&&)
console.log(true && true); // only true when both conditions are true
//! 2. OR (||)
console.log(false || false); // only false when both condition are false
//! 3. NOT (!)
console.log(!true); // Reverse the boolean value (true to false here)


//? Logical Operators With Non-Booleans (Truthy | Falsy)
//* Falsy (false)
// undefined
// null
// ''
// 0
// false
// NaN
//* Truthy (true)
// All values except falsy are truthy
//!Example
console.log(false && 'Mateen'); //false
console.log(true && 'Mateen'); //result -> 'Mateen' (truthy)(true)
console.log('' || 0); //result -> 0 (falsy)(false)
console.log(0 && 1); //result -> 0 (falsy)(false) bcz of &&
console.log('Mateen' || 1); //result -> 'Mateen' (truthy)(true)
console.log(!('Mateen' || 1)); //result -> false
console.log(!(0 && 2)); //result -> true


