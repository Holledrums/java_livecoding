// Js methods from Math(.max , .min  , .floor , .ceil , .round ,random )
// Js methods for str (.trim , .trimEnd , .trimStart , .length , .includes , .split , .toUpperCase , .toLowerCase)
// Js methods for array (.length , .includes, .join ,  )
// concat()
const arr1 = ["Hi", "cool"];
const arr2 = [22, 33];
const arr3 = ["Cool this is fun"];
const totalArray = arr1.concat(
  arr2,
  arr3,
  ["His is fun", "Nooo"],
  arr3,
  arr3,
  arr3
);
console.log(totalArray);
// functions
// DRY
function sum(x, y) {
  x + y;

  function doSomething() {
    return "Hi";
  }

  console.log(doSomething());
  return "This is me 😎";
}

console.log(sum(3, 4));

// Es6 2015
// map ... ? => const let

// Function arguments
function iPrint(str, num, arr) {
  return console.log(`I had an array ${arr} and a number ${num + 2} .`);
}
iPrint("Nice", ["No this", "Not cool"]);

// default argument
function sumArgs(x = 9, y = 22) {
  return console.log(x + y);
}
sumArgs();

// many arguments
function manyArgs(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return console.log(total);
}
manyArgs(2, 3, 4, 6, 7, 8, 9, 6, 4, 3, 5, 6, 7, 8, 8, 9, 9);
manyArgs(2, 3);
manyArgs(2, 3, 4, 6, 7, 8);
manyArgs(2, 3, 4, 6, 7, 8, 9, 6, 4, 3, 5, 6, 7, 8, 8, 9, 9, 333, 55, 67, 8);
// read user input 😎

// String [] vs charAt()

// hosting

// können wir das irgendwie mit .repeat() lösen?
