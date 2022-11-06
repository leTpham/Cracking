const palindromePermutation = require("./1-4");

describe("string is perumation of a palindrome", () => {
  test("it returns true for permutation of palindrome", () => {
    expect(palindromePermutation("Tact Coa")).toBe(true);
  });
  test("it returns false for not permuation of palindrome", () => {
    expect(palindromePermutation("to tojjk  kklLl")).toBe(false);
  });
});