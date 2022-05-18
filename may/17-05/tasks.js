// 1. Key Pair Values
// Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.
const myData = {
  name: "Hadi",
  surname: "Nsreeny",
  city: "Berlin",
  age: 32,
};

// 2. Object to Array
// Convert an object into a nested array of key pair values. Look the example below.
// Given Object

myObj = {
  1: 10,
  2: 20,
  3: 30,
};
// Expected Output:

// [["1", 10], ["2", 20], ["3", 30]]
const objToArr = (obj) => Object.entries(obj);
console.log(objToArr(myObj));
// Arrays
// 1. Data Manipulation
// Create a function named "convertArrayData". Use array methods to manipulate the data the array below. The first two items in the array should switch positions and the third item should be replaced by a new item. Change the data to get the result below. Print your solution to the console.
// Original Array

// ["coffee", "tea", "juice"];
// Expected output

// ["tea", "coffee", "milk"];
const convertArrayData = (arr) => {
  arr.pop();
  let reversedArr = arr.reverse();
  reversedArr.push("milk");
  return reversedArr;
  //   let newArr = arr.slice(1, 2);
  //   console.log(newArr);
  //   newArr.push(arr[0]);
  //   console.log(newArr);
  //   newArr.push("milk");
  //   console.log(newArr);
  //   return newArr;
};
console.log(convertArrayData(["coffee", "tea", "juice"]));

// 3. Word Converter
// Given an array of words, create a function named "wordConverter" which uses an array method to add "er" to the end of each string in the array. Look at the expected output below. Important: Do not use a loop to complete this task. Print your solution to the console.
// Array of words

// ["smart", "kind", "sweet", "small", "clear"];
// Expected output

// ["smarter", "kinder",
// "sweeter", "smaller", "clearer"]

const wordConverter = (arr, str) => arr.map((ele) => ele + str);

console.log(wordConverter(["smart", "kind", "sweet", "small", "clear"], "er"));
// 4. Hour Calculation
// Create a function called "calculateHours" which calculate how many hours (total) this person worked in the week based on the data structure hourTracking below. Note: start is always morning time, end is always afternoon. Print your solution to the console.
// Working Hours

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];
// Expected Output

const calculateHours = (arrOfOjb) =>
  arrOfOjb.reduce((total, day) => {
    return (total += day.end - day.start);
  }, 0);
console.log(calculateHours(hourTracking));
// 36

// capitalizeFirstLetter("hey there"); → `Hey There`

const capitalizeFirstLetter = (str) =>
  str
    .toString()
    .split(" ")
    .map((ele) => ele[0].toUpperCase() + ele.slice(1).toLowerCase())
    .join(" ");

console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter(true));

// 2. Validation
// Look at the unit tests for validating a pin. Create a function named "validPin" that fulfills the requirements of the tests.
// Requirements:

// The pin code must consist of only numbers.
// The pin code must be 4 digits long.
// The pin should have at least two different digits.
// The pin code's last digit should be even.
// The pin code should add up to at least 5.
// The function should print true if the pin meets all the requirements and false if it does not. Print your solution to the console.

// Expected Output

// validPin("1234"); → true

// validPin("1235"); → false // last number should be even

// validPin("wwww"); → false // should only consist of numbers

// validPin("12345"); → false // should be 4 digits, not 5

// validPin("2222"); → false // should have at least 2 different digits

// validPin("1000"); → false // does not add up to at least 5

// validPin("2224"); → true

// 1. Get total orders
// Return the total amount of orders.
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];
// 2. Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// Create a function that increments each element in the arrayOfNumbers by 1. Return the a new array of modified elements.
// 3. Filter Evens
// Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// Examples:

// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// 4. Filter Friends
// Given an array, create a function which filters array based on a search query.

// Examples

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// 5. Sum Up
// Write a function called sum that uses the reduce method to sum up an array of numbers.

// Examples:

// sum([1,2,3,4,5]); //returns 15
// // sum([6,7,7]); //returns 20
