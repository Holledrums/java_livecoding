/*
Alle Kombinationen der eingebenen Buchstaben
Gib alle möglichen Kombinationen der eingegebenen Buchstaben aus.
etwa:
  permutate("abc")
  abc
  acb
  bac
  bca
  cab
  cba
*/

function permutate(string) {
	let result = [];

	// terminate if string is a single character
	if (string.length == 1) {
		result.push(string);
		return result; // return an array with that single character
	}

	// iterate over each character of the given string
	for (let i = 0; i<string.length; i++) {
		// doubled combinations are included

		// create new inputString by removing the current character in question
		let stringNew = removeChar(string, i);

		// retrieve every subresult
		let subResults = permutate(stringNew);
		// iterate over every subresult
		for (let j=0; j<subResults.length; j++) {
			// combine each subresult with the current character
			let subResult = subResults[j]
			let word = string[i] + subResult;
			// finally push to the result array
			// result.push(subResult);
			result.push(word);
		}
	}

	// now really finally ;-) return the whole result set
	return result;
}

function removeChar(string, i) {
    return string.split('').filter(
        (currentValue, index) => index != i
    ).join('');
}

let combinations = permutate('abc')
//console.log(combinations);

combinations.forEach(element => {
	console.log(element);
});
