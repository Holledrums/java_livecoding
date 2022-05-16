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
const newInfo = ppl.map(({ name, age }) => name);
console.log(newInfo);
// SIAF
// self-invoking anonymous function
(function (num1, num2) {
  console.log(num1 + num2);
})(2, 4);

// IIFE
// Immediately-Invoked Function Expression
const sum = ((x, y) => x + y)(4, 5);
console.log("sum", sum);

// Constructor function
function AnimalsKrank(name, age, sickTyp) {
  this.name = name;
  this.age = age;
  this.sickTyp = sickTyp;
  this.display = function () {
    return console.log(`${this.name} has ${this.sickTyp}. Gut Besserung 🍀`);
  };
}
const dog = new AnimalsKrank("Max", 7, "Kopf Schmerzen");
console.log(dog);
dog.display();

// Class
class Laptop {
  // constructor method
  constructor(model, price) {
    this.model = model;
    this.price = price;
    this.display = function (productName) {
      console.log(
        `This ${productName} is ${this.model}, priced at ${this.price}€.`
      );
    };
  }
  priceUp() {
    // this.price = this.price * 5
    // this.price *= 5
    return (this.price *= 5);
  }
}
const macBookPro = new Laptop("MacBook Pro 14in", 2500);
macBookPro.display("Laptop");
macBookPro.priceUp();
macBookPro.display("Laptop");

// extends && super
class Keyboard extends Laptop {
  constructor(model, price, color, lang, cable) {
    super(model, price);
    this.color = color;
    this.lang = lang;
    this.cable = cable;
  }
}
const lg = new Keyboard("Lg", 150, "Black", "DE", false);
lg.display("Keyboard");
lg.priceUp();
lg.display("Keyboard");

// spread-operator
// in params
const avg = (...numbers) =>
  numbers.reduce((total, num) => total + num, 0) / numbers.length;

console.log(avg(3, 5, 7, 8, 5, 4, 33, 3, 3));

// in arrays
const arr1 = ["This ", "is "];
const arr2 = ["Cool "];
const totalArray = [...arr1, ...arr2];
console.log(totalArray);

// in objects soon
