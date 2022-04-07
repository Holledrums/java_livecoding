//"use strict"; // erzwingt, dass neue Variablen mit 'let' eingeführt werden.

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
