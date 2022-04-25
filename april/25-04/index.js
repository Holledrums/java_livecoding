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
// For in
for (const key in steelObj) {
  console.log(`${key} ❤️ :  Hey ${steelObj[key]} `);
}

// for of

// callbacks

// map

// reduce

// filter
