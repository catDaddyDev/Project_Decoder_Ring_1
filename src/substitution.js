function substitution(input, alphabet, encode = true) {
    // string of alphabet characters
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";

    const inputLowerCase = input.toLowerCase();  // ignores capitals

    let result  = ''; // will hold encoded/decoded string

    // should return false if 'alphabet' parameter isn't exactly 26
    if (alphabet.length !== 26) return false;

    // should return false if all of the characters in the 'alphabet' aren't unique (duplicates)
    if (Array.from(new Set(alphabet)).length !== 26) return false;

    // should return false if alphabet does not contain all characters in the input, removes spaces and letters back

    for (let char of inputLowerCase.split(' ').join('')) {
        if (!alphabet.includes(char)) {
            return false;
        }
    }

    //loop through the input string
    for (let i = 0; i < inputLowerCase.length; i++) {

        //spaces maintained throughout
        if (inputLowerCase[i] === ' ') {
            result += ' ';
        } else {
            if (encode) {
                let newIndex = trueAlphabet.indexOf(inputLowerCase[i]);
                result += alphabet[newIndex];
            } else {
                let newIndex = alphabet.indexOf(inputLowerCase[i]);
                result += trueAlphabet[newIndex];
            }
        }

    }

return result;
}

module.exports = substitution;
