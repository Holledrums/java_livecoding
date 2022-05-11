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
Output: $3000 */
// currentAge retirementAge monthlyWage percentage

((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    return "You are already in holyday";
  } else {
    let monthlySavedMoney = (monthlyWage * percentage) / 100;
    let yearsToWork = retirementAge - currentAge;
    let totalSaved = 12 * monthlySavedMoney * yearsToWork;
    console.log(`${totalSaved}`);
  }
})(32, 63, 2000, 1);

// Write a function that checks if a user give a correct German bank account
// Example:
// DE3333 -> this is not a complete bank account please check
// QQ -> this is not a bank account
// DE33nn54637 -> this is a wrong bank account
// DE22222343548839385096 -> this is correct, I'll take your money :)
// bankContoCheck("DE3333");

const bankContoCheck = (str) => {
  let countrySym = str.substring(0, 2);
  let accNumbers = str.substring(2);
  let userAccLength = str.length;
  if (countrySym != "DE") {
    return "this is not a bank account";
  }
  if (userAccLength != 22) {
    return "this is not a complete bank account please check";
  }
  if (isNaN(accNumbers)) {
    return "this is a wrong bank account";
  }
  return "this is correct, I'll take your money :)";
};
console.log(bankContoCheck("DE2222234354883nn85096"));
console.log(bankContoCheck("DE5096"));
console.log(bankContoCheck("DE22222343548839385096"));
// Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11
const calculate = (str) => Function(`return ${str}`)();
//  const calculate = (str) => `${str}`;
console.log(calculate("23+4"));

// Visa oder Master, write a function that checks if the user has entered a valid card data
// Example:
// 4121786790367597 -> this is Visa card, I need your money
// 5121786790356597 -> this is Master card, I need your money
// 341217867906365 -> this is AmEpx card, I need your money
// 11111 -> this is not correct
// de343ee -> Hey, enter only numbers
const cardCheck = (str) => {
  if (isNaN(str)) {
    return console.log("Hey, enter only numbers");
  }
  // DRY
  // Das ist nicht Profi aber bald mit Regex
  if (str.length == 16) {
    if (str[0] == 4) {
      // Visa
      console.log("this is Visa card, I need your money");
    } else if (str[0] == 5) {
      // master
      console.log("this is Master card, I need your money");
    }
  } else if (str[0] == 3 && str.length == 15) {
    // AmiEX
    console.log("this is AmEpx card, I need your money");
  } else {
    console.log("this is not correct");
  }
};
cardCheck("de343ee");

// Phone number, Write a function that checks if a user give a correct German (landline Berlin ) phone number
// 0301247893 -> I'll call now
// 333332222 -> this is not a phone number
// 03033 -> This is not complete !
// 030AA3 -> WTF !

const phoneCheck = (str) => {
  if (isNaN(str)) {
    return console.log("WTF !");
  }
  let vorNummer = str.substring(0, 2);
  if (str.length != 10) {
    return console.log("This is not complete !");
  }
  switch (vorNummer) {
    case "01":
      console.log("Handy, I'll call now");
      break;
    case "03":
      console.log("Berlin, I'll call now");
      break;
    default:
      console.log("Check one more time");
  }
};

// 030-1247893 -> I'll call now

phoneCheck("0110111111");
// Email check, write a program that checks yours input if it's a correct email
// emailCheck("Hi@hh.co") -> true
// emailCheck("Hihh.co") -> false
// emailCheck("@hh.co") -> false
