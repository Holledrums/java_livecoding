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

// Using a loop, console.log all of the values in the programming object.

// Write a command to add a new key called isFun and a value of true to the programming object.

// Using a loop, iterate through the languages array and console.log all of the languages.

// Using a loop, console.log all of the keys in the programming object.

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

// callbacks

// map

// reduce

// filter
