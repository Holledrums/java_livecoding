//step = -step;
let x = 10;
x = -x;
console.log(x);
// Array
//              0       1       2          3
const names = ["Ali", "Nancy", "Steel", "Olga"];
console.log("length", names.length);

console.log(names[2]);
console.table(names);
names[3] = "Leo";
console.table(names);
const ppl = [
  { name: "Ali", age: 22, add: "Berlin" },
  { name: "Nancy", age: 45, add: "LA" },
  { name: "Steel", age: 29, add: "Berlin" },
  { name: "Olga", age: 60, add: "Amsterdam" },
  { name: "Leo", age: 99, add: "London" },
];
console.log(ppl[3].add);
console.log(ppl[3]["add"]);
// cool
console.table(ppl.map((person) => `I like ${person.add} `));
// long
let addArray = [];
for (let i = 0; i < ppl.length; i++) {
  addArray.push(ppl[i].add);
}
console.table(addArray);
console.log(ppl.filter((person) => person.add.toLowerCase() == "berlin"));
console.log(ppl.find((person) => person.add.toLowerCase() == "berlin"));
ppl.forEach((person) => {
  console.log(person);
});
