//Loops - Loops are used to repeatedly execute a block of code until a specific condition is met
//They provide a way to automat code

//for loop
for (let i = 3; i <= 5; i++) {
    console.log('For loop:', i);
}

//while loop
let count = 1;
while (count <= 10) {
    console.log('while loop:', count);
    count++;
    console.log('while loop', count);
}

//do-while loop
let counter = 1;
do {
    console.log('Do-while count:', counter);
    counter++;
} while (counter <= 5);