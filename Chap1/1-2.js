"use strict";

/** Give two strings, write a method to decide if one is a permutation of
 * the other.
 */

function permutation(str1, str2) {
  let freqsStr1 = freqCounter(str1);
  let freqsStr2 = freqCounter(str2);
  if (Object.keys(freqsStr1).length !== Object.keys(freqsStr2).length) return false;
  for (let char in freqsStr1) {
    if (freqsStr1[char] !== freqsStr2[char]) return false;
  }

  return true;
}

function freqCounter(items) {
  let freqs = {};
  for (let item of items) {
    let curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }
  return freqs;
}

module.exports = permutation;