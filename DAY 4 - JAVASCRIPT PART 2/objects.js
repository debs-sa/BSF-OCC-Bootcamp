//JS objects

const person = {//properties
    firstName: 'Jane',
    lastName: 'Doe', //string
    age: 25, //numbers
    hobbies: ['reading', 'coding', 'hiking'], //array

    //methods
    greet: function () {
        console.log('Hello, my name is ', this.firstName); //dot notation
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

person.greet();

person.lastName = 'Smith';
console.log(person.lastName);

person.nationality = 'American';
console.log(person.nationality);

person.introduce = function () {
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`) //$ = sign specific variable
}
person.introduce();

//object
const address = {
    street: '123 Main St',
    city: 'San Francisco',
    country: 'USA'
}

person.homeAddress = address;
console.log(person.homeAddress.street); //how to get just the street of the address

//Object Destructuring
//let firstN = person.firstName;

const { firstName, lastName, age} = person;
console.log(firstName);

