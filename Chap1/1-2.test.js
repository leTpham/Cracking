const permutation = require("./1-2");

describe("strings are perumation of each other", () => {
  test("it returns true for permutation", () => {
    expect(permutation("abdsa", "sdbaa")).toBe(true);
  });
  test("it returns false for not permuation", () => {
    expect(permutation("abcdefa", "sddiaa")).toBe(false);
  });
});