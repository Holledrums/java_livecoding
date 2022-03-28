// if else
// parseInt() ->
// 01 2
// 0123456789 10
// 0-9A-F 16
console.log("numbers");
console.log(parseInt("1111", 2));
// isNaN() -> is not a number
console.log(isNaN(22));
// ++ -- += -= /= *=
let x = 4;
x *= 5; // x = x * 5;
console.log(x);
// String
// Number
// Math

// Math object

// Math.floor()
console.log("Math");
console.log("Floor", Math.floor(22.9999999999999));

// Math.ceil()
console.log("ceil", Math.ceil(22.000000000001));
// Math.round()
console.log("round up", Math.round(22.9999999999999)); // 23
console.log("round down", Math.round(22.0000000001)); // 22
// numbers
let num1 = parseInt(2);
let num2 = parseInt("44hi");
let num3 = parseInt(6);
// Math.max()
console.log("max", Math.max(num1, num2, num3)); // 44
// Math.min()
console.log("min", Math.min(num1, num2, num3)); // 2
// Math.random()
console.log(Math.floor(Math.random() * 6) + 1); // 1 - 6
// console.log(Math.floor(Math.random() * 10) + 1);
// toFixed()
let num4 = 22.0000004;
console.log(num4.toFixed(2)); // 22.44
let num5 = "1.25e+4";
console.log(parseFloat(num5));
//           0123456789
let alpha = "ABCD";
console.log(alpha[Math.floor(Math.random() * alpha.length)]);
// loops
// for (start; condition ; increment){
// What will happen
// }
// i == index
// for (let i =0; i <= 10 ; i= i+1)
//for (let i =0; i <= 10 ; i+= 1)
//  i = 0
for (let i = 0; i <= 10; i++) {
  console.log("i now is", i);
}
console.log("Coo");
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ----
// 10 * 2 = 20
for (let i = 1; i <= 10; i++) {
  console.log(`${i} * 2 = ${i * 2} `);
}

// Warum random gibt nur 0-1 ?
