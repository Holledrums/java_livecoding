// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
// console.log(humanize(1)); //"1st"
// console.log(humanize(20)); //"20th"
// console.log(humanize(302)); //"302nd"

const humanize = (num) => {
  // let numToStr = num.toString();
  // // let numToStr = num + "";
  // let lastDig = numToStr.charAt(numToStr.length - 1);
  // //console.log(numToStr);

  // switch (lastDig) {
  //   case "1":
  //     text = `${num}st`;
  //     break;
  //   case "2":
  //     text = `${num}nd`;
  //     break;
  //   case "3":
  //     text = `${num}rd`;
  //     break;
  //   default:
  //     text = `${num}th`;
  // }
  // return console.log(text);
  let addedText;
  if (num % 10 == 1) {
    addedText = "st";
  } else if (num % 10 == 2) {
    addedText = "nd";
  } else if (num % 10 == 3) {
    addedText = "rd";
  } else {
    addedText = "th";
  }
  return console.log(`${num}${addedText}`);
};
humanize(22);
humanize(1);
humanize(302);

// Write a JavaScript function to alphabetize a given string.
// Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// console.log(alphabetizeString("United States"));
// //"SUadeeinsttt"
const alphabetizeString = (str) => str.split("").sort().join("").trim();
console.log(alphabetizeString("United States"));
// Write a JavaScript function to sort the following array of objects by title value.
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

const sorted = (arr) => arr.sort((a, b) => (a.title > b.title ? 1 : -1));
console.table(sorted(library));
//sorted
/*/* {
    author: "Suzanne Collins",
    libraryID: 3245,
    title:"Mockingjay:The Final Book of The Hunger Games"
  }, [object Object] {
    author: "Bill Gates",
    libraryID: 1254,
    title: "The Road Ahead"
  }, [object Object] {
    author: "Steve Jobs",
    libraryID: 4264,
    title: "Walter Isaacson"
  }]*/

//   Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
// console.log(numStringRange("a", "z", 2));
// // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
const numStringRange = (start, end, steps) => {
  let resultArr = [];
  for (let i = start.charCodeAt(0); i < end.charCodeAt(0); ) {
    resultArr.push(String.fromCharCode(i));
    i += steps;
  }
  return console.table(resultArr);
};
numStringRange("a", "z", 1);

// const numStringRangeTest = (start,end,steps)=>{

//   let resultArr = [];
//   for( ){

// if(endingPoint == i){
// // break
// // continue
// }
//     i += steps;
//   }
// }

// * Generates an array of odd numbers of the specified length
// *
// * @example
// *    1 => [ 1 ]
// *    2 => [ 1, 3 ]
// *    5 => [ 1, 3, 5, 7, 9 ]
const oddArray = (num) => {
  let resultArr = [];
  //
  for (let i = 1; i <= num * 2; ) {
    resultArr.push(i);
    i += 2;
  }
  return console.table(resultArr);
};
oddArray(5);

// const fillArr  = (num)=> ????????.map((ele,i)=>i*2+1)
