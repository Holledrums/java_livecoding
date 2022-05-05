// Recursion

// Example "Fakultät" (engl. factorial)
// 6! = 6 * 5 * 4 * 3 * 2 * 1

function factorial(x) {
    console.log("calculating for x =", x);
    if (x < 1) {
        console.error("error: factorial not defined for numbers below 1")
        return;
    }

    if (x == 1) return 1;

    return x * factorial(x - 1);
}

console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(65));

console.log(factorial(-1));

// sum of numbers
// 5 = 5 + 4 + 3 + 2 + 1 = 15
