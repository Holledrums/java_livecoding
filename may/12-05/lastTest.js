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

// ### Loops

//  1. Sequence
// * Create a function named geometricalSequence and use a loop to print the following sequence: 1 2 4 8 16 32 64 128 256 . Concatenate each value to a string and return a string.
const geometricalSequence = () => {
  let result = "";
  for (let i = 1; i <= 256; ) {
    result += `${i} `;
    i *= 2;
  }

  return result;
};
console.log(geometricalSequence());
//  2. Multiples
// * Create a function named multiplesOfThree and use a loop to print the first five multiples of three: 3 6 9 12 15 . Concatenate each value to a string and return a string.

const multiplesOfThree = () => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result += `${i + 3} `;
  }
  return result;
};
console.log(multiplesOfThree());
// ### Problem Solving

//  1. How many?
// * Create a function named vowelCount that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
//     > **Examples**:
//
//       vowelCount("hello") // 2
//       vowelCount("test") // 1
//       vowelCount("fbw") // 0
//
const vowelCount = (str) => {
  // let newStr = str.toLowerCase();
  let counter = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++;
    }
  }
  return counter;
};
console.log(vowelCount("hello"));
console.log(vowelCount("fbw"));

// this is test for Holger
