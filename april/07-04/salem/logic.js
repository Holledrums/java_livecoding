//Logik in JS

//if true => true
//if false => false
//if 1 => true
//if 0 => false
//if 5 => true
//if "10" => true
//if undefined => false
//if null => false
//if -1 => true
//if [1, 2, 3].includes(0) => false
//if [1, 2, 3].indexOf(0) < 0 => true
//if "" => false
//if " " => true
//if "Hallo Welt" => true
//if ! => Fehler
//if a => Fehler


if (true) {
    console.log(true);
} else {
    console.log(false);
}

console.log("-------------------------");

//typeof
console.log("typeof 1 : ", typeof 1); //number
console.log("typeof 'Hallo' : ", typeof "Hallo"); //string
console.log("typeof [1, 2, 3] : ", typeof [1, 2, 3]); //object
console.log("typeof NaN : ", typeof NaN); //number