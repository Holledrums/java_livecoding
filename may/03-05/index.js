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

// Advanced test am 17.05
// SAIF
// Closure
// Callbacks
// Array Methods (sort,map,...)
// Class 16.05
// recap
// Team-Project (3)23-25.05
