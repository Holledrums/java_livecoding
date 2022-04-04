const userData = process.argv.splice(2);
function greeting(name) {
  return console.log(`Hey ${name}`);
}

greeting(userData[0]);
