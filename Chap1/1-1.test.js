const uniqueString = require("./1-1");

describe("string has all unique chars", () => {
  test("it returns true for string with unique chars", () => {
    expect(uniqueString("abcdef")).toBe(true);
  });
  test("it returns false for string with duplicate chars", () => {
    expect(uniqueString("abcdefa")).toBe(false);
  });
});