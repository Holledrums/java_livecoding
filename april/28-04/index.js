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

// forEach

// find

// findIndexOf

// some

// every

// = == ===
