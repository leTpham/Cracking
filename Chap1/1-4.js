"use strict";

/** Given a string, write a function to check if it is a permutation of a palindrome. */


//Pseudocode: for a string to be permutation of palindrome, AT MOST one char can
//appear an odd amt of time. all others need to be even frequencies.
function palindromePermutation(string) {
  let freqsString = freqCounterCaseInsensitive(string);
  let arrOddChar = [];
  for (let char in freqsString) {
    if (freqsString[char] % 2 === 1 && char !== " ") {
      arrOddChar.push(char)
    }
  }
  return arrOddChar.length <= 1;
}

function freqCounterCaseInsensitive(items) {
  let freqs = {};
  for (let item of items) {
    let curr = freqs[item.toLowerCase()] || 0;
    freqs[item.toLowerCase()] = curr + 1;
  }
  return freqs;
}

module.exports = palindromePermutation;