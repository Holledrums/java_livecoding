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

// slice()

// split()

// join()

// concat()

//
