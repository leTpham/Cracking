"use strict";

/** Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the
 * additional characters, and that you are given the "true" length of the string.
 *
 * Ex: Input "Mr John Smith      ", 13
 * Output: "Mr%20John%20Smith"
*/
//TODO: NEEDS TO FIGURE OUT HOW TO DEAL WITH LENGTH GIVEN
function replaceSpaces(string, stringLength) {
  const splitString = string.split("");
  console.log("array", splitString)
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i]===" ") {
      splitString.splice(i, 1, "%20");
    }
  splitString = splitString.splice(stringLength, stringLength - splitString.length)
  }
  return splitString.join("");

}

module.exports = replaceSpaces;