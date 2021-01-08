function caesar(input, shift, encode = true) {
    // string of alphabet characters
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // ignores capitals
    const inputLowerCase = input.toLowerCase();
    //console.log(inputLowerCase);

    // returns false if the shift value is not present, equal to 0, less than -25, or greater than 25
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25) return false;

    

    // holds encoded/decoded message
    let result = '';

    for (let character of inputLowerCase) {
        // ignores spaces and non-symbolic characters
        if (!alphabet.includes(character)) result += character;

        else {
            if (encode) {
                // locate index of character and shift
                const shiftedIndex = alphabet.indexOf(character) + shift;
                // wraps to front or back of alphabet 
                if(shiftedIndex >= alphabet.length) {
                    result += alphabet[shiftedIndex - 26];
                } else if (shiftedIndex < 0) {
                    result += alphabet[shiftedIndex + 26];
                } else {
                    result += alphabet[shiftedIndex];
                }
            } else {
                // same as above but for decoding
                const shiftedIndex = alphabet.indexOf(character) - shift;
                if(shiftedIndex >= alphabet.length) {
                    result += alphabet[shiftedIndex - 26];
                } else if (shiftedIndex < 0) {
                    result += alphabet[shiftedIndex + 26];
                } else {
                    result += alphabet[shiftedIndex];
                }
            }
        }
    }
    return result;
}

module.exports = caesar;
