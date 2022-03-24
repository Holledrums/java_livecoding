// overview from yesterday
let x = 4;
console.log(1 == 2 ? "Yeah":"Nope");
console.log( 5 % 2);
if ( ( 1 > 5 ) && ( 1 == 1 ) ){
    // true
    console.log("Cool, Yeah let's go");
} else{
    // false
    console.log("Nope , sorry");
}
console.log(0 ? "cool" : "Noo" );


// BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to or more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".
let firstName =  "Ali";
let age = 23;

if (age < 13){
    console.log(`${firstName} is child`);
} else if ((age >= 13 ) && (age < 20 )){
    console.log(`${firstName} is teenager`);
 } else if ((age >= 20)&&(age < 30)){
    console.log(`${firstName} is young adult`);
 } else if (age >= 30){
    console.log(`${firstName} is adult`);
 } else {
     console.log("This is not okay!");
 }



// isNaN  is Not a Number
console.log(isNaN("Ali"));


// Convert String into Number
// parseInt()

// Math object

// Math.floor()

// Math.ceil()

// Math.max()

// Math.min()

