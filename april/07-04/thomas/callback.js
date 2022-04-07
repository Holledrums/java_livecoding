// Die Informatik nennt Funktionen, die einer anderen Funktion als Parameter
// übergeben werden, callback function – Rückruffunktion. callback-Funktionen
// werden in der Regel beim Ausführung einer Funktion durch diese ausgeführt –
// daher der Name callback.

function greeting(name) {
    console.log(name);
}

greeting("Sophie");

function greetingWithFormatting(name, formatFunction) {
    let formattedName = formatFunction(name);
    console.log(formattedName);
}

function format(name) {
    return name.toUpperCase();
}

console.log(format("Sophie"));

greetingWithFormatting("Sophie", format);

greetingWithFormatting("AlbeRT", (name) => { return name.toLowerCase(); });
