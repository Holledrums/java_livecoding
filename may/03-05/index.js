// was ist loosely typed vs strongly typed lan?
let str;
str = 5;
str = "Cool";

// function params
// returns

// function sum(x,y){
//     return x + y;
// }
// const sum = function (x,y){
//     return x + y;
// }
const sum = (x = 2, y = 2, ...numbers) => {
  console.table(numbers);

  return x + y;
};
let globalStr = "";
let longIn = false;
function changeStr() {
  globalStr = "I did something";
  // if(){
  //     longIn = true;
  // }else{
  //     longIn= false;
  // }
}
console.log(sum(2, 4, 57786, 4, 87, 5, 4, 4, 4, 3, 3, 3));
// Arrays
const arr = [];
const arr2 = new Array();
// sort, map, join, includes, forEach, fill, filter, slice, reduce, splice, push, pop, unshift, shift, findIndexOf, indexOf,
console.log(
  Object.getOwnPropertyNames(Array.prototype).filter(
    (prop) => typeof Array.prototype[prop] == "function"
  )
);
console.log(Array.isArray(arr));

// Objects

// Basil finds

// {t:1,r:1,e:2}

const countLetters = (str) =>
  str.split("").reduce((totalObj, letter) => {
    totalObj[letter] ? totalObj[letter]++ : (totalObj[letter] = 1);
    return totalObj;
  }, {});
console.log(countLetters("tree"));
// Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
// console.log(numStringRange("a", "z", 2));
// // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function numStringRange(start, end, step) {
  var range = [];
  if (
    step === 0 ||
    typeof start == "undefined" ||
    typeof end == "undefined" ||
    typeof start != typeof end
  )
    return false;
  if (end < start) {
    step = -step;
  }
  if (typeof start == "number") {
    while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
    }
  } else if (typeof start == "string") {
    if (start.length != 1 || end.length != 1) {
      throw TypeError("Strings with one character are supported.");
    }
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);
    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start));
      start += step;
    }
  } else {
    throw TypeError("Only string and number are supported");
  }
  return range;
}

// Advanced test am 17.05
// SAIF
// Closure
// Callbacks
// Array Methods (sort,map,...)
// Class 16.05
// recap
// Team-Project (3)23-25.05
