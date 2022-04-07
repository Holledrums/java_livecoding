//01.
// Erstelle ein Program, das eines angegebenes Array kopiert und zurückgibt. Drucke das Ergebnis in die Konsole.
//Beispiele:
//copyArray([12, 66, 10]) => [12, 66, 10]
//copyArray([5, -20, "Salem", true]) => [5, -20, "Salem", true]
//copyArray([]) => []


function copyArray(arr) {
    //Weg1
    return arr.slice(0);

    //Weg2
    // let newArr = new Array(); //Gleich wie ==> let newArr = []
    // newArr.push(...arr); //Spread Operator "..." ==> Alle arr-Elemente dem newArr einfügen. Gleich wie for-Schleife + push()
    // return newArr;
}
console.log(copyArray([12, 66, 10])); //[12, 66, 10]
console.log(copyArray([5, -20, "Salem", true])); //[5, -20, "Salem", true]
console.log(copyArray([])); //[]


console.log("---------------------------------------");

//02. 
//Schreibe ein Programm, um ein String umzukehren. 
//Beispiele:
//reverseString("Hallo Welt") => tleW ollaH
//reverseString("Bonjour le monde") => ednom el ruojnoB

const reverseString = (str) => {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hallo Welt")); //tleW ollaH
console.log(reverseString("Bonjour le monde")); //ednom el ruojnoB

console.log("---------------------------------------");

//03. 
//Missing Number. Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

// Examples:

// missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

//Weg1
function findMissingNum(arr) {
    //Weg1
    let missingNum = 0;
    for (let i = 1; i <= 10; i++) {
        if (!arr.includes(i)) missingNum = i;
    }
    return missingNum;
}
const numbersArr1 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const numbersArr2 = [7, 2, 3, 6, 5, 9, 1, 4, 8];
const numbersArr3 = [10, 5, 1, 2, 4, 6, 8, 3, 9];
console.log(findMissingNum(numbersArr1)); //5
console.log(findMissingNum(numbersArr2)); //10
console.log(findMissingNum(numbersArr3)); //7

console.log("---------------------------------------");

//04. 
//Alphabetical Order. Create a function to sort a string into alphabetical order. NB: assume numbers, symbols and punctuation are not included in the string.
// i.e. alphaOrder("webdev") ➞ "bdeevw"

function AlphabeticalOrder(str) {
    return str.split("").sort().join("");
}
console.log(AlphabeticalOrder("webdev")); //bdeevw