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
// [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome"
