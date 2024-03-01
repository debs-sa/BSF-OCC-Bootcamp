// Synchronous Function
console.log(`First`);
console.log(`Second`);
console.log(`Third`);

// Asynchronous Programming

console.log(`First`);
console.log(`Second`);

setTimeout(() => {
    console.log(`Second`);
}, 5000);           //Delay of 5000 milliseconds (5s)

console.log(`Third`);