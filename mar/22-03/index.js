

//    +  -  ,  . : ;  _ #  * % () ! " " ' ' ` `  ^ ? $ {} [] @ & ~ / | = § >< 
// let name = undefined;
let name = null;
console.log(name);
let x = 5;
console.log(x);
// Strings
// Boolean
// Numbers
// Object
// Null
// Undefined

x = 77;
//               0123
let firstName = "Hadi";
console.log(firstName.length);
console.log(firstName[0]);
let number = "65798";
console.log(number[2]);

// let const var
let lastName = ""; // Es6 2015
var global = "I'm global";
// const
const birthday = "01.09.1989";
// DRY
// String
//             0123456789 
let longStr = "Hi, I'm Hadi. I'm 32 y.";
console.log(longStr.length); // 23
console.log(longStr.substring(4)); // auto bis zum ende
console.log(longStr.substring(4,13)); // start , ende
console.log(longStr);
console.log(typeof longStr);
console.log(longStr.toUpperCase());
console.log(longStr.toLowerCase());
// let firstHi = longStr.substring(0,2);
//  firstHi = longStr.toUpperCase();
let firstHi = longStr.substring(0,2).toUpperCase();
console.log(firstHi);
let restOfStr = longStr.substring(2).toLowerCase();
console.log(restOfStr);
console.log(firstHi, restOfStr);
// Hadi   hadi  hADi hadI
//            0123
let myName = "haDI";
// let firstNameChr = myName[0];
// console.log(firstNameChr);
// let restString = myName.substring(1);
// console.log(restString);
// firstNameChr = firstNameChr.toUpperCase();
// restString = restString.toLowerCase();
// console.log(firstNameChr + restString);
//              h.toUpperCase  +       aDI.toLowerCase
myName = myName[0].toUpperCase() + myName.substring(1).toLowerCase();
console.log(myName.length);


let longString = "Hi, this is FBw D05 with Hadi";
let isHadi = longString.toLowerCase().includes("hadi") // ja ,nein
console.log(isHadi);

let email = "contact@hadi-nsreeny.com";
let at = email.includes("101");
console.log(at);

// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let strExtraOne = "I can walk in the park all day!";
console.log(strExtraOne.substring(18,22));

// 
// toLocaleLowerCase()
// toLowerCase()
// warum length hat kein ()




