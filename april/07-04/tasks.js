// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.

// For example if we have function(3, 5) The function should print 3 9 27 81 243.
// Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256.
// Prints 8 exponential values of 2.

function expontential(x, y) {
    // x=3, y=5
    // 3 9    27    81  243
    // 3 3*3  3*3*3 3^4 4^5
    // 1  2     3    4   5

    if (typeof x != "number") {
        return console.log('x ist keine "number"');
    }

    if (typeof y != "number") {
        return console.log('y ist keine "number"');
    }

    /// hier ist gewährleistet, dass x und y Nummern sind
    // x hoch y => auf Englisch "x to the power of y"

    for (let i = 1; i <= y; i++) {
        let result = Math.pow(x, i);
        console.log(result);
    }

}

expontential(3, 5);
expontential(2, 8);


// ------------------------
// Fruits Create a function named printFavoriteFruit. Declare a variable outside
// of the function and store your favorite fruit as a value. Reassign the
// variable within the function and print "My favorite fruit is: x".
// console.log("Favorite Fruit");

let fruit = 'apple'; // durch 'hoisting'

function printFavoriteFruit() {
    // innerhalb
    console.log("fruit:", fruit);
}

printFavoriteFruit();


// scoping/scope

function scopeTest() {
    // let i = 1; // i ist nur innerhalb der Funktion verfügbar bzw. sichtbar.

    for (let i = 1; i < 5; i++) {
        console.log("scopeTest:", i);
    }

}

scopeTest();

let i;

function scopeTest2() {
    i = 2;
}

scopeTest2();

console.log(i);