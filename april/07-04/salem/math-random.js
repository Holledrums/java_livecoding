//gibt eine Zufallszahl (Kommazahl) im Bereich von 0 - 1 (0 inklusiv, aber 1 nicht)
const randomNumber = Math.random();
console.log("Zufallskommazahl 0-1 :", randomNumber);

//gibt eine Zufallszahl (Kommazahl) im Bereich von 0 - 6 (0 inklusiv, aber 6 nicht)
const scaledNumber = randomNumber * 6
console.log("Zufallskommazahl 0-6 :", scaledNumber);

//gibt einen Integer im Bereich von 0 - 6 (0 inklusiv, aber 6 nicht) (Abrunden) 
const roundOffInt = Math.floor(scaledNumber);
console.log("ZufallsInteger 0-6 (Abrunden) :", roundOffInt);

//gibt einen Integer im Bereich von 1 - 6 (1 inklusiv, 6 auch inklusiv) (Abrunden)
const roundOffIntWithMax = roundOffInt + 1;
console.log("ZufallsIntegerMitMax 1-6 (Abrunden) :", roundOffIntWithMax);

//gibt einen Integer im Bereich von 1 - 6 (1 inklusiv, 6 auch inklusiv) (Aufrunden)
const roundUpIntWithMax = Math.ceil(scaledNumber);
console.log("ZufallsIntegerMitMax 1-6 (Aufrunden) :", roundUpIntWithMax);

//Beispiel: Zufälligen Buchstaben einer Zeichenfolge (string) generieren
const string = "abcdef"; // 6 Buchstaben
const stringLength = string.length;
console.log("String-Länge :", stringLength); //6
const firstLetter = string[0];
console.log("Erster Buchstabe: ", firstLetter); //a
const lastLetter = string[stringLength - 1];
console.log("letzter Buchstabe: ", lastLetter); //f

let randomLetter = "";
for (let i = 0; i < stringLength; i++) {
    //gibt einen Integer im Bereich von 0 - 6 (0 inklusiv, aber 6 nicht) (Abrunden)
    //Hier kann jedes Zeichen im String zufällig generiert werden, ohne dass die Zahl '1' hinzugefügt werden muss, wie wir zufor gesehen haben, da das erste Zeichen im String den Index '0' und das letzte den Index 'stringLength - 1' hat.
    // Das heißt:
    // randomLetterIndex = Math.floor(Math.random() * (stringLength - 1) + 1 = Math.floor(Math.random() * stringLength)
    const randomLetterIndex = Math.floor(Math.random() * stringLength); //0 oder 1 oder 2 oder 3 oder 4 oder 5 
    randomLetter = string[randomLetterIndex]; //Zugälliger Buchstabe vom String
}
console.log("Zufälliger Buchstabe: ", randomLetter); //a oder b oder c oder d oder e oder f 

//Konklusion:
//Generelle Funktion, um einen zufälligen Integer im Bereich von min - max (min inklusiv, max auch inklusiv) zu generieren:
function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Zufälliger Integer 1-10 : ", getRandomInt(1, 10)); //1 oder 2 oder 3 ...bis 10
console.log("Zufälliger Integer 0-5 : ", getRandomInt(0, 5)); // //0 oder 1 oder 2 ...bis 5

const javaScript = "javaScript"; //10 Buchstaben von index 0 bis index 9
const randomLetterInJavaScript = javaScript[getRandomInt(0, 9)];
console.log("zufälliger Buchstabe in JavaScript: ", randomLetterInJavaScript); // j oder a oder v ...bis t

//Aufgabe:
//Schreibe eine Funktion, die zwei Parameter annimmt, einen Integer (eine Ganzzahl) und einen String. Der Integer soll kleiner als oder gleich die String-Länge. Die Funktion gibt einen neuen String zurüch, der aus den zufälligen Zeichen des angegebenen Strings besteht und seine Länge gleich dem Wert des angegebenen Integers.
//Beispiel: getRandomStrig(4, "randomWord"); => //Z. B. "ordr", "doWo", "aoao", "dWor" ...usw.
//Hinweis: Die Funktion getRandomInt() kann in deiner Funktion verwendet werden.