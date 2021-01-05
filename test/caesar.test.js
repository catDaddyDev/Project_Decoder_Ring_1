const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return encoded message with forward shift", () => {
        const actual = caesar("thinkful", 3);
        const expected = 'wklqnixo';
        expect(actual).to.eql(expected);
    });
    it("should return encoded message with backward shift", () => {
        const actual = caesar("thinkful", -3);
        const expected = 'qefkhcri';
        expect(actual).to.eql(expected);
    });
    it("should return decoded message", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = 'thinkful';
        expect(actual).to.eql(expected);
    });

    it("should ignore capitals, maintain spaces and non-alphabetic symbols- encoding", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.eql(expected);
    });
    it("should ignore capitals, maintain spaces and non-alphabetic symbols- decoding", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.eql(expected);
    });

    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        const actual1 = caesar("thinkful");
        const actual2 = caesar("thinkful", 99);
        const actual3 = caesar("thinkful", -26);
        expect(actual1 && actual2 && actual3).to.be.false;
    });
});