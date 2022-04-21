// Object
const obj = {};
const obj2 = new Object();

console.log(typeof obj2);

const person = {
  firstName: "Ali",
  lastName: "Steel",
  age: 22,
  act: ["Sleep", "eat", "dream"],
  display: () => {},
  print: function () {},
};
person.firstName = "Jack";
person["middleName"] = "Dann";
person["AgeSum"] = () => {};
console.log(person);
const cars = { number: 5, storage: 4 };
const house = { city: "Berlin", add: "xxx str" };
const myData = Object.assign(cars, house, { name: "Me", age: 99 });
console.log(myData);
// seal
Object.seal(myData);
// isSealed
console.log(Object.isSealed(myData));
delete myData.name;
console.log(myData);

// Keys
const objKeys = Object.keys(myData);
console.log(objKeys);
// Values
const objValues = Object.values(myData);
console.log(objValues);

/*

[]
()
{}
key : "value",

[{},{},{},{},{}]

console.log();


*/
const ppl = [
  { name: "Ali", age: 22 },
  { name: "Nancy", age: 24 },
  { name: "Steel", age: 32 },
  { name: "Olga", age: 40 },
];
console.log(ppl[1].name);
console.log(ppl[1]["name"]);

// Object.defineProperty()
const userInfoObj = {};

Object.defineProperty(userInfoObj, "name", {
  value: "Hadi",
  writable: false,
});
userInfoObj["add"] = "Berlin";
console.log(userInfoObj);
userInfoObj.name = "Steel";
console.log(userInfoObj.name);
// Object.defineProperties()
Object.defineProperties(userInfoObj, {
  lastName: { value: "Nsreeny", writable: true },
  act: { value: ["Cooking", "Biking"] },
  bikes: { value: ["V2"], writable: false },
});

// Object.hasOwnProperty()
