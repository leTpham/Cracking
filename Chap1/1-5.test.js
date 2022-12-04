const oneAway = require("./1-5");

describe("two strings are one or zero edit away", () => {
  test("it returns true if one edit away - same length", () => {
    expect(oneAway("pale", "bale")).toBe(true);
  });
  test("it returns true if one edit away - diff length", () => {
    expect(oneAway("pale", "pal")).toBe(true);
  });
  test("it returns true if one edit away - diff length", () => {
    expect(oneAway("pal", "pale")).toBe(true);
  });
  test("it returns true if zero edit away", () => {
    expect(oneAway("pale", "pale")).toBe(true);
  });
  test("it returns false if not one or zero edit away", () => {
    expect(oneAway("pale", "bake")).toBe(false);
  });
  test("it returns false if not one or zero edit away", () => {
    expect(oneAway("pale", "stale")).toBe(false);
  });
  
});