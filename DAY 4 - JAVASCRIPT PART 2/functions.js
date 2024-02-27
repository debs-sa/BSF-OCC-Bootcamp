//Functions - Allows us to write reusable block of codes and also provide ways to organize and structure codes

//declaring a function
function greet() {
    console.log(`Hello to the world of functions!`)
    console.log(`Hello to the world of functions!`)
    
};

//calling a function
greet();



//Function declaration - Can be hoisted
function functionDeclaration() {
    console.log(`Hello! I am a function declaration!`)
};

functionDeclaration();


//Function expression - Can not be hoisted
const functionExpression = function() {
    console.log(`Hello! I am a function expression!`)
};

functionExpression();


//Functions with parameter
function greetme(name) {
    console.log(`Hello`, name + `!`);
}

greetme(`Regel`);

//function without parameter
function greetme() {
    console.log(`Hello` + `!`);
}

greetme();


//Functions with a return value
function sum(a, b) {
    console.log(`I am printed before the returned value`);
    return a + b; //this marks the end of the statement
    console.log(`I am printed before the returned value`); //this will not be printed
}

console.log(`The sum of a and b is:`, sum(10, 20));