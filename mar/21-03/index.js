// DRY Don't repeat yourself
// Comment
console.log(2==3);
//   ; , - _ ? !  " "  ' '  ` ` § $  &  /  |  \ = : * + { } [ ] # @  ^ ~ % < > () .  
// Ausdruck mit log Methode
console.log("Hadi");

console.log(1<44);
// true & false
console.log(1+1);
// 
// Object
// Boolean (true / false)
// String ("Text % I'm Hadi 1.2 ")
// Number (1   20    333   -3   0.3   0 2000004   )
// null 
// 
let x = 55;
// 

let str = "Hadi";
let bool = true;
let empty = null;


//  undefined 
//  not defined
let cool = "You are cool";
//  x = 44;
console.log(x)
console.log(x * 55 + x - 44);
//          44 * 55 + 44 - 44
// empty = 9;
console.log(empty );

// console.log(typeof );

function iDoSomething (){
    // function scope
    console.log("Hey, I'm a function");
}
iDoSomething();

iDoSomething();


let num = 0;
console.log(typeof num);
let notReady = null;
console.log(typeof notReady);
console.log(num / 5);
console.log(notReady * 1);

function sum(a,b){
    // scope
    let local = "I'm local var";
    let x = "Cool";
    console.log(x);
    console.log(b+a)
}

sum(22,44);
sum(2,3);
sum(33,5474566)
// x ist Global var
console.log(x);
function printOut (name,age,address){
    console.log("I'm" , name , age , "years old" , "I live in" , address );
    console.log(`Hi I'm ${name} ${age} years old I live in ${address}`);
}
printOut("Hadi",32, "Berlin");
printOut("Ivan",36,"Köln");

// let's Practice
/* These exercises are aimed at making you familiar with using node to run your scripts & the console.log method. For each exercise, run your script in node to check if your console.log(s) are working. Remember to use camelCase where needed.

Make your own JavaScript file and work from there. Open up your terminal in VS Code. */

// Console log a line of text eg. "this is an exercise in console logging" (do not forget quotation marks).

console.log("this is an exercise in console logging");

// Declare a variable and give your variable the following value: "This is the value.". Console log your variable.
let longStr = "This is the value.";
console.log(longStr);
// Declare a variable called firstName and assign your first name to that variable. Do the same with your last name. Console log both variables. NOTE: When console logging two variables, separate the variables with a comma (,) in the console log e.g. console.log(variable1, variable2);
let firstName = "Hadi";
let lastName = "Nsreeny";
console.log(firstName, lastName); 
// camelCase firstName , BBQ first-name , snack_case first_name


// Make a profile of someone's information. Store all the information in variables eg. name, city, job etc. (five variables total) Console log the variables.
let firstAndLastName = "Steel";
let city = "Paris";
let job = "Teacher";
let age = 31;
let sex = "male";
// console.log(firstAndLastName,city,job,age,sex);


// Print a sentence using the profile variables above, adding text where necessary for sentence flow, i.e., "John Smith is a 43 year old teacher who lives in Berlin". you can combine variables with text in the console by using the plus symbol (+) e.g. console.log("this is a " + variable);
console.log(`My name is ${firstAndLastName} ${age} years old, I live in ${city}. I'm ${job}`); 
console.log("My name is ",firstAndLastName, " ", age ,"years old, I live in ", city , ". I'm ", job );

// Declare a variable and assign a string as its value. Make sure the string is at least 6 characters long. Print the variable to the console.
//            01234567891
let string = "Nancy Schwarz";
console.log(string);
// Access the 2nd and 6th elements of the string using index notation. Print the elements to the console.
console.log(string[9],string[10]);
console.log(string[5])
// Declare a variable called name and assign a string as its value.
let myName = "Ali";

// Declare a variable called age and assign a number as its value.
let myAge = 99;

// Declare a variable called year and assign a number as its value.
let year = 2022; 

// Using your declared variables, print a string to the console. For example, "Basem is 37 in 2020".
console.log(myName,"is",myAge,"in",year); // old school
console.log(`${myName} is ${myAge} in ${year}`);// ES6
// Declare a variable called isMarried and assign it a boolean value.
let isMarried = true;
// Print a string to the console, indicating whether or not your person is married. For example, "Basem is married: true"
console.log(myName,"is married:",isMarried); // old school
console.log(`${myName} is married: ${isMarried}`);// ES6


