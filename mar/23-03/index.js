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
console.log(isStudent ? "Ticket costs €5,00":"Ticket costs €12,00")
// if else


// && || 

// isNaN

// * + - /

// ++ --