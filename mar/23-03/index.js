//  
console.log("hi HaDI".toLowerCase());
console.log("hi HaDI".toUpperCase());
console.log("     Cool    ".trim());
console.log("     Cool    ".trimStart());
console.log("     Cool    ".trimEnd());
console.log("Hi, this is cool".substring(3,9)); 
console.log("I'm Hadi".includes("@"));
let num = 0;
num++;
console.log(num); // 1
num--;
num--;
num--;
console.log(num);
console.log("Hadi".length);

// let str1 = "Hi";
// let str2 = "This is cool";
// console.log(str1 + " " +str2);
let str1 = "Hi";
// str1 = str1 + " this is cool";
str1 += " this is cool";
console.log(str1);
num += 5;
console.log(num);
num -= 100;
console.log(num);
num *=44;
console.log(num);
num /=3;
console.log(num);


// bracket notation [0]
//           012   
console.log("ALi"[0]);

// Numbers
// odd und even
// even 0,2,4,6,8
// odd 1,3,5,7,9
console.log( 99 % 2);

// Conditional ternary Operator  2015 Es6
// condition ? true : false
// Frage ? richtig : falsch
// Bedingung ? Ausdruck1: Ausdruck2
// >= <= == 
10 >= 10  ? console.log("Nice"): console.log("Nope");
console.log(1 / 4 + 55);
1 / 4 + 55  == 0 ? console.log("Nice"): console.log("Nope");
console.log(1 % 2 );
2 % 2 == 0 ? console.log("Even"): console.log("Odd");
1 == 0 ? console.log("Cool"): console.log("Nooo");
// DRY 
console.log(10 == 1 ? "😀" : "No way");
let isLogged  = false; // false || true
// console.log(typeof isLogged);
console.log(isLogged ? "Cool": "Nooo");

//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
(33, 40, 2,1,22)

console.log(33 % 2 == 0 ? "30" : "Odd");
console.log(40 % 2 == 0 ? "30" : "Odd");
console.log(2 % 2 == 0 ? "30" : "Odd");
console.log(1 % 2 == 0 ? "30" : "Odd");
let number = 22;
console.log(number % 2 == 0 ? `${number} is even`: `${number} is odd`);

oddOrEven(100);

function oddOrEven (userNum){
    console.log(userNum % 2 == 0 ? `${userNum} is even`: `${userNum} is odd`);
}
// console.log(num); this is Global
oddOrEven(100);
oddOrEven(99);
oddOrEven(54);

// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = true;
console.log(isDog ? "pat, pat":"find me a dog to pat!");

// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 50;
let mySpeed = 50;

console.log( mySpeed >= speedCheck ?"too fast":"Oma");

//4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = true;
console.log(isStudent ? "Ticket costs €5,00":"Ticket costs €12,00");
//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 60;
console.log(age < 16 ? "serve butter beer":"serve beer");
// if else
/* if (bedingung) {
    anweisung1 
   } else {
    anweisung2}
    */
/* if (frage) {
    true

} else {
    false
}
*/
let bool = "Nix";
// 1 == true
// 0 == false
// full string == true
// empty string == false
// undefined == false
// null == false
// Object = true
// Array == true
if (bool){
    console.log("cool");
    console.log("This is amazing");
}  else {
    console.log("Noooo");
    console.log("I'm sorry");
}
console.log("------- Training --------");
// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

// Tip: 
// and in Englisch 
// && in JavaScript
// || or in JavaScript
// let startOfRange = 50;
// let endOfRange = 99;
let num1 = 0.5;
let num2 = 99;
// range ist 50 bis 99
// Kiss
//if( firstNum check up || secondNum number check up )
if( ((num1 >=50) && (num1 <=99)) || ( (num2 >=50) && (num2 <=99)) ){
    console.log("Nice");
} else{
    console.log("Not nice");
}

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Return true if one or more of them are in the said range.
let num3 = 50;
if( ((num1 >=50) && (num1 <=99)) || ( (num2 >=50) && (num2 <=99)) || ( (num3 >=50) && (num3 <=99)) ){
    console.log("Nice");
} else{
    console.log("Not nice");
}
//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// let text = "PyHadi" ->PyHadi
// console.log("HadiPy".includes("Py"));
//          012345
let text = "Nancy";
console.log(text.substring(0,2));
if (text.substring(0,2) == "Py"){
    console.log(text);
    // noch more
}else{
    console.log("Py"+text);
}
console.log( text.substring(0,2) == "Py" ? text: "Py"+text);
console.log(text.startsWith("Py") ? text : "Py"+text)

//9. Calculate the sum of the two given integers. If the two values are same, then return triple their sum. 
let firstNum = 1;
let secondNum = 2;
let sum = firstNum + secondNum;
if( firstNum == secondNum ){
    console.log((firstNum + secondNum) * 3 );
} else{
    console.log("Sorry they are not the same");
}
console.log(firstNum == secondNum ? (firstNum + secondNum) * 3: " Sorry they are not the same" );
// isBigger, check if a given number bigger then 55, write that in function
// check the following 55,4,2,51,2.2

function isBigger (userNum){
  return  userNum >= 55
}
function isBigger2 (userNum){
      console.log(userNum >= 55)
  }
console.log(isBigger(55));
console.log(isBigger(4));
console.log(isBigger(2));
console.log(isBigger(51));
console.log(isBigger(2.2));
isBigger2(23);
isBigger2(65)


console.log(typeof (1>=50));


// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".

// && 
// true && true = true
// false && true = false
// true && false = false
// false && false = false
// || 
// true || true = true
// false || true = true
// true || false = true
// false || false = false

// isNaN

// * + - /

// ++ --