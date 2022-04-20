// Create a function that returns an array of the properties of a javascript object.
//   Example
const person = {
  name: "Mike",
  class: "4A",
  course: "English",
};
// Expected output:
//   ["name", "class", "course"]

// function return, array, Object.keys.

function objKeys(obj) {
  return Object.keys(obj);
}
console.log(objKeys(person));

// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: "D05",
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student.print();
// Create a method that prints the following: "Zain Oil a student in class D05"

// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
// function return, array, Object.values
function objValues(obj) {
  return Object.values(obj);
}

console.log(objValues(getObjectValues));

// Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// (4, { min: 0, max: 5 }) ➞ true

// (4, { min: 4, max: 5 }) ➞ true

// (4, { min: 6, max: 10 }) ➞ false

// (5, { min: 5, max: 5 }) ➞ true

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

// Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// {} ➞ true

// {a: 1} ➞ false
