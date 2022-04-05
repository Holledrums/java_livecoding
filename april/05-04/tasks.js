// AEIOU:
// Vowels. Create a function that takes a string in its parameters. and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

// function name findVowels, 1 argument, return a number, for, if
function findVowels(str) {
  let counter = 0;
  let vowels = "AEIOUaeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      // true
      counter++;
    }
  }
  return counter;
}
console.log(findVowels("this is a string")); // 4
console.log(findVowels("this")); // 1
console.log(findVowels("Hadi")); // 2
// ---------------------------------

// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]
// Create a program == write a function
// noDuplicates function, 1 array argument, return newArr, array, for, push, if
function noDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(newArr.indexOf(arr[i]));
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(noDuplicates([1, 4, 4, 7, 7, 7])); // 1, 4, 7]
console.log(noDuplicates([1, 6, 6, 9, 9])); // [1, 6, 9]
console.log(noDuplicates([2, 2, 2, 2, 2, 2])); // [2]
// ---------------------------------

// is Palindrome AKA word that reads the same backward or forward.

// Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat,

// isPalindrome function,  1 argument str, true/false, array, array method.

const isPalindrome = (str) =>
  str.toLowerCase() == str.toLowerCase().split("").reverse().join("");

console.log(isPalindrome("madam"));
console.log(isPalindrome("Hadi"));
console.log(isPalindrome("tarrattarrat"));

// This question has 2 parts

// Part a) write a function that takes in a number and does a console.log("Even 10!") if the number is evenly divisable by 10. Examples:
// ---------------------------------
// printIfDivisibleByTen(1) --> no output
// printIfDivisibleByTen(2) --> no output
// printIfDivisibleByTen(32) --> no output
// printIfDivisibleByTen(10) --> "Even 10!" into the console
// printIfDivisibleByTen(30) --> "Even 10!" into the console
// printIfDivisibleByTen(90000) --> "Even 10!" into the console
// Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

// ---------------------------------

// Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

// ------------------------
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments
function tellFortune() {}
// ------------------------
//  Write a JavaScript function that generates a string passing a specified length of random characters. AKA password generator
// use the following chrList
let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// ------------------------
// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.

// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

// ------------------------
// Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
