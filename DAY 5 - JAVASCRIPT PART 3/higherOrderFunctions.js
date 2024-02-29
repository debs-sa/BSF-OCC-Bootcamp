//hof = higher order functions

function  higherOrderFunction(callback) {                                   //callback another function
    console.log('This is the higher function speaking.')
    callback();
}

function passedFunction() {
    console.log('This is the passed function being called');
}

higherOrderFunction(passedFunction);