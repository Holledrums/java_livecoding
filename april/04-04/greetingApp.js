const userData = process.argv.splice(2);
function greeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Hey ${names[i]}`);
  }
}

greeting(userData);

// function sum(x, y) {
//   return x + y;
// }

// let newNum = sum(3, 4) + 5;

//console.log(process.env.USER);
