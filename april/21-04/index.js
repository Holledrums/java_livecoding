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
Object.seal(myData);
console.log(Object.isSealed(myData));
delete myData.name;
console.log(myData);
// Object.defineProperty()

// Object.defineProperties()

// Object.hasOwnProperty()
