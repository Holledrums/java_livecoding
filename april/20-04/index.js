// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value
let str = "";
let num = 0;
let bool = true;
const arr = [];
const sumFunction = () => {};
const personObj = {
  firstName: "Hadi",
  lastName: "Nsreeny",
  age: 32,
  add: "Berlin",
  toolStack: ["JavasScript", "Java", "PHP"],
  hasKids: false,
};
const personObj2 = {
  firstName: "Ali",
  lastName: "Steel",
  age: 22,
  add: "LA",
  toolStack: ["C#", "C++"],
  hasKids: true,
};
const personObj3 = {
  firstName: "Nancy",
  lastName: "Schmidt",
  age: 42,
  add: "Paris",
  toolStack: ["Js", "C"],
  hasKids: true,
};
console.log(typeof personObj);
const carObj = {
  model: "Bugatti",
  color: "red",
  price: 3987000,
  fuelConsumption: "16.6–30.3 L/100km",
};
// method 1
console.log(personObj["age"]);
// method 2
console.log(personObj.toolStack[2]);

// Object Literal
const obj = {};
console.log(obj);
obj["name"] = "Olga";
console.log(obj);
obj.name = "Jenna";
console.log(obj);
// Accessing properties
// 1- with (bracket notation)

// 2- with (dot notation)

// Assignment using dot notation, more used to access a property value

// Assigning using bracket notation, more used for an empty object

const userObj = {
  name: "Tobi",
  age: 33,
  add: "xxx str 13040 Berlin",
  act: ["draw", "sleep", "eating"],
  job: "HR",
  fat: true,
};

// Tell us more about you
const myObj = {
  name: "Hadi",
  lastName: "Nsreeny",
  age: 32,
  city: "Berlin",
  act: ["sport", "bike tour", "cooking"],
  gotKids: false,
  job: "Webdev",
  toolStack: ["Ruby", "Java", "Python", "Javascript", "PHP"],
  bike: {
    name: "Panigale V2",
    color: "red",
    hp: 155,
  },
  walte: "isEmpty",
  display: function () {
    // Hey Hadi, you are 32 years old. I hope you are having fun in Berlin ....
    console.log(
      `Hey ${this.name} ${this.lastName}, you are ${this.age}. I hope you are having fun in ${this.city}`
    );
  },
};

console.log(myObj.bike.color);
myObj.display();
myObj.print = function () {
  console.log("This is a cool method");
};
console.log(myObj);
myObj.print();

// Object.keys

// Object.values

// Object.assign

// Object.defineProperty()

// Object.defineProperties()

// Object.hasOwnProperty()

// Object.seal()
