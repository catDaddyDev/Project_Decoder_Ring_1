const expect = require("chai").expect;
const polybius = require("../src/polybius");
// Write your tests here!
describe("polybius", () => {
    it("should return encoded message", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });
    it("should return decoded message", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    });
    it("spaces should be maintained throughout-- capital letters can be ignored", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.equal(expected);
    });
    it("When encoding, your output should still be a string", () => {
        expect(polybius("Hello world")).to.be.a('string');
    });
    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
    it("The letters 'i' and 'j' share a space. When encoding, both lettera are converted to 42", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });
    it("The letters 'i' and 'j' share a space. when decoding, both letters should somehow be shown", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th[i/j]nkful";
        expect(actual).to.equal(expected);
    });
});