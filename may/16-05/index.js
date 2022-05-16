// Closure
// function return other function
const priceCheck = (num) => {
  const discount = () => (num * 10) / 100;
  return `If you pay ${num}€, you will save ${discount()} € `;
};

console.log(priceCheck(2));
// Destructuring objects as function parameters
// Op 1
const printFunction = (obj) => {
  let name = obj.name;
  let age = obj.age;
  console.log(name, age);
};
// Op 2
const printFunction2 = ({ name, age }) => {
  console.log(name, age);
};

// const arr = ["😎", "🤓"];
// let firstItem = arr[0];
// console.log(firstItem);
printFunction({ name: "Steel", age: 22, hight: 188, add: "London" });
printFunction2({ name: "Jack", age: 33, hight: 180, add: "LA" });
const ppl = [
  { name: "Nancy", age: 8 },
  { name: "Ali", age: 50 },
  { name: "Steel", age: 42 },
  { name: "Jack", age: 78 },
];
const newInfo = ppl.map(({ name, age }) => console.log(name));
// SIAF
// self-invoking anonymous function

// IIFE
// Immediately-Invoked Function Expression

// Constructor function

// Class

// constructor method

// extends %% super
