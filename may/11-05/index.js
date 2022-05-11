function Person(name, age, add) {
  this.firstName = name;
  this.age = age;
  this.add = add;
  this.showData = function () {
    return `This is me ${this.firstName}, I'm ${this.age} years old.`;
  };
}

const aliObj = new Person("Ali", 22, "London");
const nancyObj = new Person("Nancy", 40, "LA");
const zainObj = new Person("Zain", 32, "Amsterdam");
console.log(zainObj.firstName);
console.log(nancyObj.showData());
const arr = new Array();
// class
class Animals {
  // constructor method aka setup
  constructor(kind, hometown) {
    this.kind = kind;
    this.hometown = hometown;
    // this.print = function(){}
  }
  // instances properties after constructor
  display() {
    return `This animal is ${this.kind} that lives in ${this.hometown}`;
  }
}

const cat = new Animals("Cat", "LA");
const dog = new Animals("Dog", "NY");
dog.age = 33;
dog.print = function () {
  return "cool";
};

console.log(cat.display());
console.log(dog.kind);
console.log(typeof Animals);

class Color {
  constructor() {
    this.name = "";
    this.tem = 0;
  }
  darkness = 0;
}
const red = new Color();
console.log(red);
red.name = "RED";
red.tem = 332;
console.log(red);
const orange = new Color();
orange.name = "ORANGE";
console.log(orange);

// Tv app

class Tv {
  constructor(brand, channel, volume = 10) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  inVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log(this.volume);
    } else {
      console.log("This is too loud");
    }
  }
  decVolume() {
    if (this.volume > 0) {
      this.volume--;
      console.log(this.volume);
    } else {
      console.log("No sound");
    }
  }
  rest() {
    this.channel = 1;
    this.volume = 10;
  }
  randomChannel() {
    this.channel = Math.floor(Math.random() * 50) + 1;
  }
  info() {
    return `This ${this.brand} Tv, has channel ${this.channel} on right now. The volume is currently at ${this.volume} `;
  }
}
const samsung = new Tv("Samsung", 50, 20);
console.log(samsung);
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.inVolume();
samsung.decVolume();
samsung.decVolume();

samsung.decVolume();
samsung.decVolume();
samsung.decVolume();
samsung.rest();
samsung.randomChannel();
console.log(samsung);
const lg = new Tv("LG", 80);
console.log(lg.brand);
console.log(lg.info());
// extends && super
