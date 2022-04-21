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

// Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac("14-02-2002")  -> Aquarius
// zodiac("10-06-1984")  -> Gemini

// function, object, array, loops.

data = [
  { signName: "Not real day!", from: "0000" },
  { signName: "Capricorn", from: "0101" },
  { signName: "Aquarius", from: "0120" },
  { signName: "Pisces", from: "0220" },
  { signName: "Aries", from: "0321" },
  { signName: "Taurus", from: "0420" },
  { signName: "Gemini", from: "0521" },
  { signName: "Cancer", from: "0621" },
  { signName: "Leo", from: "0723" },
  { signName: "Virgo", from: "0823" },
  { signName: "Libra", from: "0923" },
  { signName: "Scorpio", from: "1023" },
  { signName: "Sagittarius", from: "1123" },
  { signName: "Capricorn", from: "1222" },
  { signName: "Not real day!", from: "1232" },
];
