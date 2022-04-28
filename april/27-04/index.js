const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
const discounts = [22, 3, 45, 6];
// map
// Have 4 toDos
// 1. method
// 2. callBack
// 3. loop
// 4. make a copy for the original array
const emojiCopy = emojis.map((emoji, index) => {
  return `hi ${emoji} ${index}`;
});
console.log(emojiCopy);
const copyDiscounts = discounts.map((discount) => discount * 22);
console.log(copyDiscounts);
const users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
// const greeting = users.map((user) => `Hey ${user.name}, ${user.age} years old`);
const greeting = users.map((user) => {
  return { something: `Hey ${user.name}, ${user.age} years old` };
});
console.log(greeting);
// const yorNewCopy = yourOriginalArray.map((element,index)=>{return "your new index value"});
// const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
// filter
const filteredEmoji = emojis.filter((emoji) => {
  return emoji == "😈";
});
console.log(filteredEmoji);
const words = ["this", "is", "longText", "somethingLong", "jo"];
const filteredWords = words.filter((word) => word.length == 2);
console.log(filteredWords);
const jobs = [
  { title: "teacher", salary: 1500, location: "Amsterdam", remote: true },
  { title: "IT", salary: 2400, location: "LA", remote: true },
  { title: "Web developer", salary: 1800, location: "London", remote: false },
];
const filteredJob = jobs.filter(
  (job) => job.salary >= 1500 && job.salary <= 2000
);
console.log(filteredJob);

// reduce
const itemsList = [
  { title: "Qual lock", price: 80 },
  { title: "shoe", price: 139 },
  { title: "light", price: 120 },
];
const totalCost = itemsList.reduce((acc, item) => acc + item.price, 0);
console.log(`You have to pay : ${totalCost}€`);

// fill
const arr = [1, 2, 5, "😎", "🤓", 9];
const alpha = ["a", "c", "b", "A", ":"].sort();
console.log(alpha);
//console.log(arr.fill({ price: 99 }));

// sort
// UTF-16 code
// method
// callback
console.log(arr.sort((a, b) => a - b));
// const sortedArr = arr.sort();
// console.log(sortedArr);
