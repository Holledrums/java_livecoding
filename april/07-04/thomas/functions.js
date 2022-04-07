function printGreeting(firstname) {
    console.log("Hallo,", firstname);
}


let vorname = "Holger";
printGreeting(vorname);

printGreeting("Christoph");

function printGreeting2(firstname, lastname) {
    console.log("Hallo,", firstname, lastname);
}

printGreeting2("Albert", "Einstein");

let hallo = "Hallo,";
let firstname = "Albert";
let lastname = "Einstein";

console.log(hallo, firstname, lastname);

// Return Values

function sum(a, b) {
    let sum = a + b;

    return sum;
}


let result = sum(1, 2);
console.log(result);

function isEven2(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


function isEven3(a) {
    let isEven = false;

    if (a % 2 == 0) {
        isEven = true;
    }

    return isEven;
}

function isEven(a) {
    if (a % 2 == 0) return true;

    return false;
}

console.log(isEven(5));
console.log(isEven(8));
console.log(isEven(result));
