// const mocha = require("mocha")
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
const newNum = require("./index");

describe("Basic tests", () => {
    it("Test should pass if return reverse number 321 for 123", () => {
        let num1 = newNum(123);
        assert.deepEqual(num1,321);
    });
    it("Test should pass if return reverse number 332 for 233", () => {
        let num2 = newNum(233);
        assert.deepEqual(num2,332);
    });
    it("Test should pass if return reverse number 535 for 535", () => {
        let num3 = newNum(535);
        assert.deepEqual(num3,535);
    });
    it("Test should pass if return reverse number 43059 for 95034", () => {
        let num4 = newNum(95034);
        assert.deepEqual(num4,43059);
    });
});