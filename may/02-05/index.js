// let || const || var nameSpace = value;
let x = 0;
console.log(sumUp(22, 3));
console.log(globalVar);
let someThing = "text";

// comment one line
/*

many lines

*/

function sumUp(x, y) {
  return x + y;
}
var globalVar = "I'm Global";
// Synchronous and Asynchronous

// ? true : false
// ternary condition ? ex if true : ex if false
// = == ===
let userIsLogged = false;
console.log(userIsLogged ? "welcome back 🙂" : "You need to log in 😉");
console.log(1 == "1" ? "Cool, I looked only at the value" : "noooo");
console.log(
  1 === "1" ? "Cool, I looked only at the value and the type" : "noooo"
);

// strings
let str = "This is a long text";
console.log(str.length);
str.trim();
str.trimEnd();
str.trimStart();

// Math

// if else
let totalItems = 550; // Front-end thing
if (totalItems > 150) {
  // something true
  console.log("Nice you got a free gift");
} else {
  // something false
  console.log("Oh no you need to buy more 😉");
}

// loops ( break || continue )
console.log("------ break-------");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
console.log("------- continue------");
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

// switch
