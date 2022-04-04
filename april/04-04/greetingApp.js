const userData = process.argv.splice(2);
function greeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Hey ${names[i]}`);
  }
}

greeting(userData);
