// Overview
const arr = new Array();
const arr2 = [];
// delete const let new for ... log
console.log(arr);
arr2[0] = "Ali";
arr2.push("Steel");
arr2.unshift("Nancy");
arr2.unshift("Olga");
console.table(arr2);
let lastDeletedItem = arr2.pop();
console.log("Deleted item :", lastDeletedItem);
let firstDeletedItem = arr2.shift();
console.log("Last item :", firstDeletedItem);
console.table(arr2);
console.log(arr2.length);
arr2[1] = "Alex";
arr2.reverse();
console.table(arr2);
let userName = arr2[0];
console.log(userName);

console.log(arr2.indexOf("Hadi"));
// console.log(arr2.lastIndexOf("Alex"));

// No Duplicates! A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// [1, 6, 6, 9, 9] ➞ [1, 6, 9]

// [2, 2, 2, 2, 2, 2] ➞ [2]

// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

// function clearUp(arr) {
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     // if (resultArr.indexOf(arr[i]) == -1) {
//     //   resultArr.push(arr[i]);
//     // }
//   }
//   return console.table(resultArr);
// }
function clearUp(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // ! not
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return console.table(result);
}

clearUp(["Ali", "Ali", "Steel"]);
clearUp([1, 2, 2, 2, 2, 2, 2, 2]);

// splice()
//            0     1        2
const days = ["Mon", "Mitt", "Don", "Frei"];
let deletedItems = days.splice(0, 2);
console.log(deletedItems);
console.table(days);
// slice()
//                  0          1        2       3
const cities = ["Berlin", "London", "Dubai", "LA"];
// let newArr = cities; // not a copy
let newArr = cities.slice(0);
console.log(newArr);
console.log(cities);

// Js {}
// arr []
// function, method ()

// split()
let str = "This is a long text";
console.table(str.split(" "));

// join()
const text = ["Hi", "I", "am", "Hadi"];
console.log(text.join(" "));

// . snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.

// Examples:

// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"
// DRY
function toCamelCase(str) {
  //let result = "";
  let newArr = str.toLowerCase().split("_");
  // newArr[0] = newArr[0].toLowerCase();
  for (let i = 1; i < newArr.length; i++) {
    newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1); //.toLowerCase();
  }

  return console.log(newArr.join(""));
}
toCamelCase("hello_world");
toCamelCase("JAVascript_is_fun");
// 2015  Es6
// arrow function =>
const toCamelCaseArrow = (str) => {
  let newArr = str.toLowerCase().split("_");
  for (let i = 1; i < newArr.length; i++) {
    newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substring(1); //.toLowerCase();
  }
  return console.log(newArr.join(""));
};
toCamelCaseArrow("ja_is_cool");
// old school
function sum(x, y) {
  return x + y;
}
sum(2, 5);
// Es6
const sumArrow = (x, y) => x + y;
//
function display(str) {
  return console.log(str);
}
const displayArrow = (str) => console.log(str);

// . Dictionary. Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

// Notes:

// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
// Examples:

// dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

const dictionary = (str, arr) => {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].substring(0, str.length) == str) {
      resultArr.push(arr[i]);
    }
  }
  return console.log(resultArr);
};

dictionary("buto", ["button", "breakfast", "border"]);

// console.log("Hadi".substring(0, 2));
