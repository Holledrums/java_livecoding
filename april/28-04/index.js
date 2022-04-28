// for
// i -> index
console.log("----- for ------");
for (let i = 0; i == 10; i++) {
  console.log(i);
}
const personObj = {
  firstName: "Steel",
  age: 22,
};
console.log("---- For in -----");
for (const key in personObj) {
  console.log(`${key} 😎 ${personObj[key]}`);
}
const namesArr = ["Nancy", "Ali", "Olga", "Steel"];
console.log("------ For of ------");
for (const name of namesArr) {
  console.log(name);
}
console.log("------ do while ------");
// do while
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 10);
console.log(i);

console.log("------ while ------");
// while
let index = 0;
while (index < 5) {
  console.log(index);
  index++;
}
console.log("------ forEach ------");
// forEach
const cities = ["Berlin", "London", "Dubai", "NY"];
// Op pro
cities.forEach((ele) => {
  if (ele == "London") {
    console.log(`${ele} is an amazing city`);
  } else {
    console.log(ele);
  }
});
// console.log(cities[1]);
// old school
for (let i = 0; i < cities.length; i++) {
  // console.log(cities[i]);
}

// find
//               0     1     2     3     4
const emojis = ["😎", "😎", "😎", "😎", "😎", "🤓", "🤓", "🤓", "🤓", "❤️", 1];
const findEmojiResult = emojis.find((ele) => ele == "🤓");
const filterEmojiResult = emojis.filter((ele) => ele == "🤓");
console.log("----- find -----");
console.log(findEmojiResult);
console.log("----- filter -----");
console.log(filterEmojiResult);
// All advanced array methods, reduce is not
// arr.method((element, index, array)=> {return "something"})
console.log("----- findIndex -----");
// findIndex
const emojiFindIndex = emojis.findIndex((ele) => ele == "Cool");
console.log(emojiFindIndex);
// indexOf
const emojiIndexOf = emojis.indexOf("Cool");
console.log(emojiIndexOf);
console.log("----- some -----");
// some
console.log(emojis.some((ele) => ele == "😎")); // true/false
console.log("----- every -----");
// every
console.log(emojis.every((ele) => ele == "😎")); // true/false

// let const var
// if () {
// something true
//} else {
// something false
// }
// && ||
// = == ===
// for(let i=0;i < 10;i++)
// ++ --
// +=  -=  *=  /=
// .length (String oder Array)
// console.log()
// String ""
// Number 0287643 -2 22.3
// Bool (true/false)
// Array []
// Object {}
const item = {
  id: 1993,
  name: "iPhone",
  price: 1200,
  model: "Pro Max",
  memoryCard: 256,
  apps: ["Clock", "FaceBook", "FaceTime"],
  abCountry: {
    location: "Berlin",
    amount: 33,
    sellOne: function () {
      return this.amount--;
    },
    returnOne: function () {
      return this.amount++;
    },
    callChina: function () {
      return (this.amount += 100);
    },
  },
  getInfo: function () {
    console.log(
      `This ${this.name} sold in ${this.abCountry.location} will cost you ${this.price}€ `
    );
  },
  printData: () => console.log("This is a cool function"),
};
console.log(item.abCountry.location);
item.abCountry.returnOne();
item.abCountry.returnOne();
item.abCountry.returnOne();
item.abCountry.sellOne();
console.log(item.abCountry.amount);
