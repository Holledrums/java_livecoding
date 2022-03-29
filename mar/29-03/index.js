// Array
//              0        1       2       3
const names = ["Ali", "Nancy", "Steel", "Ali"];
console.log(names.length);
console.log(names[0][0]);
// { }
console.log(names[1][2]);
console.log(names[2].substring(2, 4));

// Bracket Notation
names[1] = "Carlo";
console.log(names);
const arr = [];
console.log(arr.length);
console.log(arr);

//
// push()
arr.push(55);
arr.push(43);
arr.push(23);
arr.push("");
arr.push(4);
arr.push("488");
arr.push("Hadi");
console.table(arr);
console.log(arr.length);
// indexOf()

console.log("indexOf", names.indexOf("Ali"));
console.log("lastIndexOf", names.lastIndexOf("Ali"));

// unshift()
arr.unshift("Hi");
arr.unshift("Cool");
arr.unshift("Nooo");
console.table(arr);

// pop()
arr.pop();
arr.pop();
console.table(arr);
// shift()
arr.shift();
console.table(arr);
// push && pop last index
// unshift && shift first index

// reverse()
const numbers = [1, 2, 3, 5, 6];
numbers.reverse();
console.log(numbers);
