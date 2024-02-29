// Inheritance

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating.`);
    }
}

//Child class Dog
class Dog extends Animal {
    bark() {
        console.log(`Woof woof!`);
    }
}

//Child class Cat
class Cat extends Animal {
    meow() {
        console.log(`Meow meow!`);
    }
}

const myDog = new Dog(`Bingo`);
myDog.bark();                   //Woof woof!
myDog.eat();                    //Bingo is eating



const cat = new Cat(`Pelusa`);
cat.meow();
cat.eat();

