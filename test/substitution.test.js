const expect = require('chai').expect;
const substitution = require('../src/substitution');
// Write your tests here!
describe('substitution', () => {
    it("should return encoded message", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.eql(expected);
    });
    it("should return decoded message", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.eql(expected);
    });
    it("should return encoded message with spaces maintained throughout and capitals ignored", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.eql(expected);
    });
    it(("should return false if 'input' or 'alphabet' is missing"), () => {
        const actual = substitution("", "");
        expect(actual).to.be.false;
    });
    it("should return false if the 'alphabet' is not exactly a string of 26 characters", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
    it("should return false if the 'alphabet' is not a string", () => {
        const actual = substitution("thinkful", 42);
        expect(actual).to.be.false;
    });
    it("should return false if all of the characters in the 'alphabet' are not unique", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
    it("should return false if 'alphabet' doesn't contain all characters in the 'input'", () => {
        const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthd!pzibev', false);
        expect(actual).to.be.false;
    });
});