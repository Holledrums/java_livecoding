// Overview
console.log(global);
console.log("Hi Javascript");
// let const var
let x, firstName, lastName;
x = 99;
firstName = null;
console.log(x);
console.log(firstName);
console.log(typeof x);
//console.log(cool);

// hosting
var global = "I'm global hoisted var";
console.log(global);
function sum(str, arr) {
  // scope
  global = "Yes";
  let x = "Nice, I'm local var";
  console.log(x); // Nice, I'm local var
}
sum("Hi", [1, 3, 4]);
console.log(x); // 99

// String
console.log("😇 Hadi §$%/() \" ' \n Oh this is fun ");
console.log(` 😇 Hadi §$%/() \" ' 

Oh this is fun`);
let str = "I love Javascript";
console.log("str length:", str.length);
console.log("str substring:", str.substring(2, 7)); //
console.log("str UpperCase:", str.toUpperCase());
console.log("str LowerCase:", str.toLowerCase());
console.log("str substring + UpperCase :", str.toUpperCase().substring(5));
console.log("str [8]:", str[8]); // a
console.log("str charAr(8):", str.charAt(8)); // a
// UTF-16
// 🫣
console.log("str charCodeAr(8):", str.charCodeAt(8));
console.log("str includes:", str.includes("I"));
// ++ --
let num = 0;
num++; // num = num + 1; // num += 1;
num--; // num = num - 1; // num -= 1;
num = 4444444;
num *= 5; // num = num * 5;
num /= 4; // num = num / 4;
let float = 22.2334455;
console.log("random : ", Math.floor(Math.random() * 10));
console.log("num ceil: ", Math.ceil(float));
console.log("num floor: ", Math.floor(float));
console.log("num round: ", Math.round(float));
console.log("Math min: ", Math.min(3, 46, 8, 32)); // 3
console.log("Math max: ", Math.max(2, 3, 5, 6, 8, 44)); // 44
console.log("PI:", Math.PI); // this is a prob
const myPI = 3.141592653589793;
console.log("parsInt: ", parseInt("123aasd1")); // 123
console.log("with number base parsInt: ", parseInt("1111aasd1", 16)); // 123
console.log("parsFloat: ", parseFloat("2.44qq")); // 2.333
// trim()
firstName = "     Hadi     ";
console.log("trimStart: ", firstName.trimStart());
console.log("trimEnd: ", firstName.trimEnd());
console.log("trim: ", firstName.trim());
// bool
// true false
let bool = true; // 1 " " "Ali" true
bool = false; // 0 "" null false
// = == ===
console.log("condition ", 1 == "1" ? "Cool" : "Noo");
console.log("condition ", 1 === "1" ? "Cool" : "Noo");
// && || !

if (false) {
  // something
} else if (true) {
  // other thing
} else {
  // last thing
}
let age = 40;
switch (age) {
  case 2:
    console.log("You are baby");
    break;
  case 12:
    console.log("You are boy");
    break;
  case 21:
    console.log("You are small man");
    break;
  case 30:
    console.log("You are man");
    break;
}
// condition ? true : false

// Es6

// concat()
