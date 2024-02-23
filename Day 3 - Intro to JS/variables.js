//variables

// var variable - global scoped variable

/*
var myName = "Debora";
console.log(myName);

if(true){
    console.log(myName);
}
*/


if (true) {
    var myName = "Debora";
    myName = "Ms. Debora";
}

console.log(myName);


// let variable - block-scoped variable
let age = 18;
console.log(age);

if (true) {
    let animal = "Dog";
    animal = "Elephant";
    console.log(animal); //it was outside before
}

//console.log(animal); this will not work outside the scope where it was declared
//use "let" as variable instead of "var"

//const variable - fized or cannot be changed
const bithdate = "02-21-2024";
console.log(bithdate);
// birthdate = "00-00-0000"; it is a constant variable


