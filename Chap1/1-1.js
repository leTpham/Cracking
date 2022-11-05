"use strict";
/** Implement an algorithm to determine if a string has all unique characters.
 * What if you CANNOT use additional data structures? */

function uniqueString(word) {
  let leftIdx = 0;
  let rightIdx = word.length - 1;
  while (leftIdx < rightIdx) {
    if (word[leftIdx] === word[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

module.exports = uniqueString;