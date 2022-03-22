

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
console.log(firstHi + restOfStr);
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
//  2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let hello = "Hello world";
console.log(hello.toUpperCase());
//  3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let earth = "Earthlings";
console.log(earth.toLowerCase());
//  4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
//        012345678
let js = "JavaScript";
console.log(js.substring(3,6));
js = "Java";
//  5. Check if the sentence “nice shoes” contains the letter l.
let nice = "nice shoes";
console.log(nice.includes("l"));
//           3 , 4 , 5, 56 
console.log(1+2,4,5,55+1);

//  6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.

let javaScript = "JavaScript";
 // let firstJavaChr = "J"; // hard code
 let firstJavaChr = javaScript[0];
 console.log(firstJavaChr+javaScript+firstJavaChr);
console.log(javaScript[0]+javaScript+javaScript[0]);
let myAge = 32;
let myJob = "Teacher";
let avatar = "😀"
console.log(`
Hey ${avatar}
------------
| I'm ${myName} |
| I'm ${myAge}  |
|  years old  |
------------
Likes Comments Share`);

// trim()
console.log(1+1);
let herFirstName = "       Nancy        ";
let herLastName = "Olga"
// trimEnd()
// trimStart()
// trim()
console.log(herFirstName.trimEnd() + " " + herLastName.trim());
// + - =
let strOne = "hi";
let srtTwo = "I live in Berlin";

let longStrOneAndTwo = strOne + " " + srtTwo +" "+ "And I like Summer.";
console.log(longStrOneAndTwo);
//strOne = strOne +  " I like Winter.";
strOne += " I like Winter.";
console.log(strOne);


let num = 22;
// num = num - 2;
num -= 2; // 20
console.log(num);
// num = num - 1;
num--;
console.log(num);
// num = num + 1;
num++; // 20
console.log(num);

// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt





// 
// toLocaleLowerCase()
// toLowerCase()
// warum length hat kein ()




