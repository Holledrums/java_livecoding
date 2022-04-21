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
console.log(userInfoObj.lastName);

// Object.hasOwnProperty()
console.log(userInfoObj.hasOwnProperty("name"));
console.log(userInfoObj.hasOwnProperty("age"));

// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

// function, return Object, counter, loop, {}, if else , hasOwnProp,
// OP 1
function countLetters(str) {
  let resultObj = {};
  for (let i = 0; i < str.length; i++) {
    let currentChr = str[i];
    if (resultObj.hasOwnProperty(currentChr)) {
      resultObj[currentChr] += 1;
    } else {
      resultObj[currentChr] = 1;
    }
  }
  return console.log(resultObj);
}
countLetters("tree and sun");
// OP2
