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
console.log(Math.floor(Math.random() * 5) + 1); // 1 - 6

// Warum random ist nur 0-1
