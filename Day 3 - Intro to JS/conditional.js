//Conditional

//Conditionals: if statement
let age = 17;

if(age >= 18){
    console.log('You are eligible to vote!');
} else {
    console.log('You are not eligible to vote!');
}

//if-else statement
let temperature = 25;
if (temperature < 0){
    console.log('It is freezing!');
} else if (temperature >= 0 && temperature < 20){
    console.log('It is cold outside!');
} else {
    console.log('It is a warm day!');
}

//Conditionals: Switch Statement
let day = 'Tuesday';

switch(day){
    case 'Monday':
        console.log('It is the start of the week!');
    break;
    case 'Friday':
        console.log('It is the end of the week!');
    break;
    default:
        console.log('It is is an ordinary day!');
    break;

}