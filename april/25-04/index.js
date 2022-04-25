// Object
const personObj = {
  firstName: "Ali",
};
personObj.display = function () {
  console.log(`Hey ${this.firstName}`);
};
// [{},{},{}]

//personObj.display();
// For
const names = ["Ali", "Nancy", "Olga", "Steel"];
// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]}`);
// }
const steelObj = {
  name: "Steel",
  age: 22,
  add: "Paris",
};
// For in (nur mit Object)
for (const cool in steelObj) {
  console.log(` ${cool} :  ${steelObj[cool]}`);
}
// const var let delete for in console Array Object String Number element

// for of (nur mit Array)
// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]}`);
// }
for (const element of names) {
  console.log(element);
}

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};
// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);
// Using a loop, console.log all of the values in the programming object.
for (const key in programming) {
  console.log(programming[key]);
}
// Write a command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;
console.log(programming);
// Using a loop, iterate through the languages array and console.log all of the languages.
for (const element of programming.languages) {
  console.log(element);
}
// Kiss
// Using a loop, console.log all of the keys in the programming object.
// element in array
// prop in object
for (const key in programming) {
  console.log(key);
}
const keysInProgramming = Object.keys(programming);
//console.log(keysInProgramming);
for (const element of keysInProgramming) {
  console.log(element);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
programming.giveItTry = function () {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
  }
};
console.log(programming.giveItTry());

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
console.log(programming);

// callbacks
function first(cb) {
  const isFun = () => "this is fun";
  // something more
  return cb;
}
function cb() {
  return "Cool";
}
console.log(first(cb()));

// map
const cities = ["Berlin", "Paris", "LA", "NY"];
const newCity = cities.map((city, num) => `you live in ${city}`);
console.log(newCity);

// reduce
const numArr = [1, 1, 1, 1, 1, 1];
// cur currentValue
// acc accumulator
const sumResult = numArr.reduce((acc, cur) => acc + cur);
console.log(sumResult);
// filter
