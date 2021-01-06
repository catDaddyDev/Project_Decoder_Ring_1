function polybius(input, encode = true) {
    const alphabet = 
        {'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51',
        'f':'12', 'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k': '52',
        'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53',
        'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54',
        'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55'};

    //Capital letters can be ignored.
    const lowerCaseInput = input.toLowerCase();
    let result = '';

    //encoding
    if (encode) {
        //loop thru characters
        for (let i = 0; i < lowerCaseInput.length; i++) {
            let currentChar = lowerCaseInput[i];
            if (currentChar === 'i' || currentChar === 'j'){
                // return 42 for both i/j
                result += alphabet['i'];
            } // maintain spaces
            else if (currentChar === ' ') {
                result += ' ';
            } // return corresponding coordinates for letter
            else {
                let match = Object.entries(alphabet).find(pair => currentChar === pair[0]);
                result += match[1];
            }
        }
    } else {
        //decoding
        // return false if string of coordinates isn't an even number, excluding spaces
        if (input.split(' ').join('').length % 2 !== 0) return false;
        for (i = 0; i < input.length; i+=2) {
            let coordinate = `${input[i]}${input[i+1]}`;
            if (coordinate.includes(' ')) {
                result += ' ';
                i -= 1;
            } else if (coordinate == 42) {
                result += '[i/j]';
            } else {
                let match = Object.entries(alphabet).find(pair => coordinate === pair[1]);
                if (match) result += match[0];
            }
        }
    }
    return result;
}

module.exports = polybius;
