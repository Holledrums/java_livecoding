// Overview
// concat
const arr1 = [2, 34, 5];
const arr2 = ["hi", "THis is Js"];
const totalArr = arr1.concat(arr2, [3, 5]);
const totalArr2 = [...arr1];

console.table(totalArr2);
// process
//console.log(process);
// ...
function sum(...args) {
  console.log(args);
}
sum(4, 5, 6, 8, 9, 0, 6, 5, 4, 3);

// return
function iGreet(name) {
  let newText = `Hey ${name}`;
  return console.log(newText);
}
iGreet("Ali");
function multi(x, y) {
  //
  return "Hi";
}
console.log(multi(3, 55));
const bigNum = 3 + 5 * 55 - multi(3, 55);
console.log(bigNum);

// Functions declarations as values:
// const functionName = function(parameters){ ... }

const iDoSomething = function (str) {
  // something
  return "Something";
};

// Functions declarations as values:
// const functionName = (parameters) => { ... }
const iDoSomethingEs6 = (str) => `Something ${str}`;
console.log(iDoSomethingEs6());
const trueOderFalse = (x, y) => x > y;
console.log(trueOderFalse(3, 6));

// Invoke the function AKA function call
iGreet();

// Call stack 65536

// Callback
function iDoCoffee() {
  let milk = iHaveMilk();
  let sweetener = iHaveSweetener();
  let eis = iHaveEis();
  let spoon = iHaveSpoon();

  return `Your coffee with ${milk} ${sweetener} ${eis} and ${spoon}  is ready.`;
}

const iHaveMilk = () => `Milk`;
const iHaveSweetener = () => `Something sweet`;
const iHaveEis = () => `Eis`;
const iHaveSpoon = () => `Spoon`;

console.log(iDoCoffee());

// continue;
// Skipping an iteration:

// brake;
// Stopping an iteration  || exiting a switch case:

// String [] vs charAt()

// hosting

// können wir das irgendwie mit .repeat() lösen?

// Recursion
