function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || !shift) return false;
    let finalResult = [];
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    input.toLowerCase().split(' ').forEach(word => {
        word.split('').forEach(character => {
            if(alphabet.includes(character)) {
                if (encode) {
                    const shiftedIndex = alphabet.indexOf(character) + shift;
                    if (shiftedIndex >= alphabet.length) {
                        result += alphabet[shiftedIndex - 26];
                    }
                    else if (shiftedIndex <= 0) {
                        result += alphabet[shiftedIndex + 26];
                    }
                    else {
                        result += alphabet[shiftedIndex];
                    }
                }
                else {
                    const shiftedIndex = alphabet.indexOf(character) - shift;
                    if (shiftedIndex >= alphabet.length) {
                        result += alphabet[shiftedIndex - 26];
                    }
                    else if (shiftedIndex <= 0) {
                        result += alphabet[shiftedIndex + 26];
                    }
                    else {
                        result += alphabet[shiftedIndex];
                    }
                }
            } else {
                result += character;
            }
        });
        finalResult.push(result);
        result = '';
    });
    return finalResult.join(' ');
}

module.exports = caesar;
