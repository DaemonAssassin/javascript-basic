//* if else
//* case switch
//* while loop
//* do-while loop
//* for loop
//* for-in loop
//* for-of loop


//? for-in loop
//* in objects -> for-in loop gives keys
//* in arrays -> for-in loop gives indexes
let person = {
    name: 'Mateen',
    age: 22,
    subject: 'Full Stack Development'
};
let colors = ['red', 'green', 'blue'];
for (let key in person) {
    console.log(key, person[key]);
}
for (let index in colors) {
    console.log(index, colors[index]);
}
//? for-of loop
for (let color of colors) {
    console.log(color);
}



//! summary
//* we used for-in loop to iterate over properties of an object
//* we used for-of loop to iterate over items or elements in an array