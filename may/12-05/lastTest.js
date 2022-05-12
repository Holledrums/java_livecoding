// Name of City
//  1. Los or New?
// * Create a function named nameOfCity. If a string begins with "Los" or "New", then print the full string. If not, print "The city name does not begin with Los or New". Be careful of case sensitivity.

const nameOfCity = (str) => {
  let stringStarter = str.substring(0, 3).toLowerCase();
  if (stringStarter == "new" || stringStarter == "los") {
    return console.log(str);
  } else {
    return console.log("This is not a city");
  }
};

nameOfCity("Berlin");
nameOfCity("Los An");
nameOfCity("NewSomething");

// Is Divisible
//  2. isDivisible?
// * Create a function named isDivisible . The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
// **Examples**:
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true
const isDivisible = (num) => num % 100 == 0;
console.log(isDivisible(3));
console.log(isDivisible(300));
console.log(isDivisible(100));

// Ternary Operator
//  4. What's the weather?
// * Use a ternary operator to complete this task. Create a function named isRaining. If true, print "wet day - you need an umbrella". If false, print "dry day - leave your umbrella at home".

const isRaining = (bool) => (bool ? "Wed day" : "Dry day");
console.log(isRaining(true));
console.log(isRaining());
