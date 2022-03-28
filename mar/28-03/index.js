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
  //console.log(i, "👺 2 👻", i * 2);
}
let str = "";
for (let i = 0; i <= 10; i++) {
  str += `Nice ${i} `;
}
console.log(str);

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log("-------");
for (let i = 1; i <= 10; ) {
  console.log(i);
  i += 2;
}
// 100 200 300 400 500 600 700 800 900 1000
let str1 = "";
for (let i = 100; i <= 1000; ) {
  str1 += `${i} `;
  i += 100;
}
console.log(str1);
// 1 1 1 2 2 2 3 3 3 4 4 4
let str2 = "";
for (let i = 1; i <= 4; i++) {
  str2 += `${i} ${i} ${i} `;
}
console.log(str2);
// 0 2 4 6 8 10
let str3 = "";
for (let i = 0; i <= 10; ) {
  str3 += `${i} `;
  i += 2;
}
console.log(str3);
// 3 6 9 12 15
let str4 = "";
for (let i = 3; i <= 15; ) {
  str4 += `${i} `;
  i += 2;
}
// 3 5 7 9 11 13 15
let str11 = "";
for (let i = 3; i <= 15; ) {
  str4 += `${i} `;
  i += 2;
}
console.log(str11);

for (let i = 0; i <= 10; i++) {
  // i = 1
  console.log("Nice");
  for (let j = 0; j <= 10; j++) {
    // j = 0
    console.log("Something");
  }
}
// nested loops
for (let i = 1; i <= 10; i++) {
  // i = 1
  console.log("----------");
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j} `);
  }
  console.log("----------");
}

// 0 1 2 3 0 1 2 3 0 1 2 3
let str5 = "";
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 3; j++) {
    str5 += `${j} `;
  }
}
console.log(str5);
// 1 1 1 2 2 2 3 3 3 4 4 4 5 5 5
let str6 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 13; j >= 10; j--) {
    str6 += `${i} `;
  }
}
console.log(str6);
/*
// this is one for
+
++
+++
++++
*/
// Number
// Op 1
for (let i = 0; i <= 3; i++) {
  console.log("*".repeat(i));
}
// Op 2
let starsShape = "";
for (let i = 0; i <= 3; i++) {
  starsShape += "*";
  console.log(starsShape);
}
// Op 3
let str55 = "";
for (let i = 1; i <= 1; i++) {
  for (let j = 1; j <= 4; j++) {
    str55 += "+";
    console.log(str55);
  }
}
// Op 4

// Op 5
/*
// this is other for
****
***
**
*



*/
// Op 1
for (let i = 3; i >= 0; i--) {
  console.log("*".repeat(i));
}
// Op 2
let starDownShape;
for (let i = 3; i >= 0; i--) {
  starDownShape = "";
  for (let j = 0; j <= i; j++) {
    starDownShape += "*";
  }
  console.log(starDownShape);
}
// Op 3
let starsWithSub = "****";
for (let i = 0; i <= 3; i++) {
  console.log(starsWithSub.substring(i));
}
// Op 4

// Addition. Write a program to add up the numbers 1 to 20.
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("sum :", sum);

// There are i bottles of beer on the wall.
//  Write a program that will output,
//"There is 1 bottle of beer on the wall."
// "There are 2 bottles of beer on the wall" up until there are five bottles.
// Warum random gibt nur 0-1 ?
// DRY

let text = "";
for (let i = 1; i <= 5; i++) {
  console.log(
    `There ${i == 1 ? "is bottle" : "are bottles"} of beer on the wall`
  );
  if (i == 1) {
    console.log(`There is ${i} bottle of beer on the wall`);
  } else {
    console.log(`There are ${i}bottles of beer on the wall`);
  }
}
