// Clones vs. References
// Primitive  (Simple values are always clones)
// String, Number, Boolean
let x = 5;
let val = x; // clone
// console.log(val);
val = 333;
console.log(x);
const obj = {
  id: 22,
};
let ref = obj; // ref
ref.id = 55;
console.log(obj.id);

const names = ["Nancy", "Zain", "Steel"];
let arrRef = names; // ref
names.push("Jack");
console.log(arrRef);
// Cloning Array using:
// Method 1
const newArrWithSpread = [...names]; // clone
// Method 2
const newArrWithMap = names.map((ele) => ele); //clone
// Method 3
const newArrWithSlice = names.slice(0); //clone
// Method 4
const newArrayWithConcat = [].concat(names); // clone
//  colors : ["Red","Sliver","White"],
const car = {
  brandName: "Audi",
  modelYear: 2022,
  colors: ["Red", "Sliver", "White"],
  op: {
    leatherFinish: true,
    dash: "Wood",
  },
};
// Shallow clone for an object using ...
const objShallowClone = { ...car };
console.log(objShallowClone);
objShallowClone.brandName = "BMW";
objShallowClone.colors.push("Blue");
objShallowClone.op.dash = "Old Wood";
console.log(car);
//  Recursion
const fact = (num) => {
  // stop
  if (num == 1) {
    return 1;
  }
  // 7 * 6 *= 5 *=4 *= 3 *=2 *=1
  return num * fact(num - 1);
};

console.log(fact(7));

// Deep copy using recursion 🤨
function deepClone(val) {
  // array
  if (Array.isArray(val)) {
    return val.map(deepClone);
  }
  // object
  if (typeof val == "object") {
    return Object.keys(val) // ["id","name"]
      .map((key) => {
        return { [key]: deepClone(val[key]) }; // [{id: deedClone(33)},{name: deepCone("Zain")} ]
      }) // [{},{},{},{}]
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  }
  // all other val
  return val;
}

const newCarDeepClone = deepClone(car);
const newTextDeepClone = deepClone("Hi");
const newArrDeepClone = deepClone(["this", "is"]);

const newObjDeepClone = deepClone({ id: 33, name: "Zain" });
const newBoolDeepClone = deepClone(true);

console.log(newTextDeepClone);
newCarDeepClone.op.dash = "cool wood";
console.log(newBoolDeepClone);
