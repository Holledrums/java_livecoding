// reduce
// old school
const numbersArray = [3, 5, 8];
let box = 0;
for (let i = 0; i < numbersArray.length; i++) {
  let cur = numbersArray[i];
  box = box + cur;
}
console.log(box);
// Have 4 toDos
// 1. method ✔
// 2. callBack ✔️
// 3. loop
// 4. box
// Prof
const resultSum = numbersArray.reduce((box, cur) => {
  return box + cur;
}, 0);
console.log(resultSum);

// Create a function that returns an object has following output, try this one in Advance array methods 💪🏻

// Examples:

// ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}
// tree -> { t: 1, r: 1, e: 2}
// old school
function countLetters(str) {
  let resultObj = {};
  for (let i = 0; i < str.length; i++) {
    let currentChr = str[i];
    if (resultObj.hasOwnProperty(currentChr)) {
      resultObj[currentChr] += 1;
    } else {
      resultObj[currentChr] = 1;
    }
  }
  return console.log(resultObj);
}
countLetters("tree and sun");

// [] () {}
const countLetter = (str) => {
  const arr = str.split("");
  const result = arr.reduce((box, cur) => {
    // box["t"] = 1
    // box[cur]= box[cur] ? box[cur] +1 : 1;
    if (box["t"]) {
      box[cur] += 1;
    } else {
      box[cur] = 1;
    }

    return box;
  }, {});
};
console.log(countLetter("qqq"));
// map
// Have 4 toDos
// 1. method
// 2. callBack
// 3. loop
// 4. make a copy for the original array

// filter
