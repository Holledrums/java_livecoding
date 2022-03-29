// Array
//              0        1       2       3
const names = ["Ali", "Nancy", "Steel", "Ali"];
console.log(names.length);
console.log(names[0][0]);
// { }
console.log(names[1][2]);
console.log(names[2].substring(2, 4));

// Bracket Notation
names[1] = "Carlo";
console.log(names);
const arr = [];
console.log(arr.length);
console.log(arr);

//
// push()
arr.push(55);
arr.push(43);
arr.push(23);
arr.push("");
arr.push(4);
arr.push("488");
arr.push("Hadi");
console.table(arr);
console.log(arr.length);
// indexOf()

console.log("indexOf", names.indexOf("Ali"));
console.log("lastIndexOf", names.lastIndexOf("Ali"));

// unshift()
arr.unshift("Hi");
arr.unshift("Cool");
arr.unshift("Nooo");
console.table(arr);

// pop()
arr.pop();
arr.pop();
console.table(arr);
// shift()
arr.shift();
console.table(arr);
// push && pop last index
// unshift && shift first index

// reverse()
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

// [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
const namesArr = ["Maria", "Mike", "Paul", "Doven"];
// let namesLength = ;
// console.log(namesLength);
let str = "";
for (let i = 0; i < namesArr.length; i++) {
  str += `Hello ${namesArr[i]}! `;
}
console.log(str);
// Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array."
// Susan is at index 0 of my friends and family array,
// Rezvane is at index 1 of my friends and family array,
//  Hadi is at index 2 of my friends and family array.
//                  0        1         2
const friendsArr = ["Susan", "Rezvane", "Hadi"]; // 3
let strFriends = "";
for (let i = 0; i < friendsArr.length; i++) {
  strFriends += `${
    friendsArr[i]
  } is at index ${i} of my friends and family array ${
    i == friendsArr.length - 1 ? "." : ","
  } `;
}
console.log(strFriends);
// City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome."
const cityNames = ["Berlin", "Paris", "Prague", "Rome"]; // 3
let cityStr = "";
for (let i = 0; i < cityNames.length; i++) {
  cityStr += `${cityNames[i]}${i == cityNames.length - 1 ? "." : ","} `;
}
console.log(cityStr);

// These exercises are designed for practicing arrays and array methods. You may need to look up some methods to complete these tasks. Print each result to the console.

// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondItem = euroCities[1];
console.log(secondItem);
// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
// Print the length of the array "euroCities".
console.log("length", euroCities.length);
// Remove the last item of the array "euroCities".
euroCities.pop();
console.table(euroCities);
// Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.table(euroCities);
// Create another variable named asianCities and assign an array of at least 5 cities to the variable
const asianCities = ["Dubai", "Hong Kong", "Istanbul", "Tokyo", ""];

// Capitalize. Create a program that capitalizes the first letter of each element in an array of names. Examples:
// ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]

// ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]

// ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

function capitalizes(names) {
  for (let i = 0; i < names.length; i++) {
    // let first = names[i][0].toUpperCase();
    // let rest = names[i].substring(1).toLowerCase();
    // names[i] = first + rest;
    names[i] = names[i][0].toUpperCase() + names[i].substring(1).toLowerCase();
  }
  return console.table(names);
}
const arr1 = ["matt", "sara", "lara"];
const arr2 = ["samuel", "MARIA", "luke", "mary"];
const arr3 = ["Cynthia", "Karen", "Jane", "Carrie"];
capitalizes(arr1);
capitalizes(["haDI", "ali"]);
capitalizes(arr2);
capitalizes(arr3);

// Repeat it. Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array. Examples:
// ("example", 3) ➞ ["example", "example", "example"]
