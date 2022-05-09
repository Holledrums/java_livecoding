// local vs global
/*

 global 
 let x =  3;
{
    local
}

*/
// outer function
function sum(num1, num2) {
  function second(n) {
    // inner function
    if (n != 0) {
      return "Sorry";
    }
    return n;
  }
  return second(num1) + second(num2); // 2 + 3 = 5
}

sum(2, 3);

// Nested scope
let nice = true;
const outerFunction = (x, y) => {
  let big = false;
  console.log(big + " outerFunction");
  const innerFunction = (num) => {
    big = true;
    nice = false;
    const innerInnerFunction = () => {
      fat = false;
    };
    let fat = true;
    innerInnerFunction();
    console.log(fat); // false;
  };
  fat = false;
  innerFunction();
  console.log(fat);
  console.log(`innerFunction : big = ${big}, nice = ${nice}`);
};
outerFunction();
//console.log(fat);

// Closure
// function return other function

function fun() {
  let num = 10;
  function iDosomething() {
    return num;
  }
  return iDosomething();
}
fun(); // 10;

// Invoke == call
// SIAF
// self-invoking anonymous function
(function (name, add) {
  console.log("Hi");
})("Hadi", "Berlin");
(() => console.log("cool"))();
// IIFE
// Immediately-Invoked Function Expression
const resultSum = ((x = 2, y = 3, ...args) => x + y)(2, 4, 3, 3, 4, 5, 6);
console.log(resultSum);

// (()=>)()

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.

const add = (a) => (b) => a + b;
console.log(add(2)(3));

// Callback cb

// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
const multiplier = (
  (num) => (x) =>
    num * x
)(3)(3);
console.log(multiplier);

/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */
