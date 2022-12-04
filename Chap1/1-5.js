/** There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit
 * (or zero edits) away.
 */

function oneEditAway(str1, str2) {
  if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  }
  if (Math.abs(str1.length - str2.length) === 1) {
    return oneEditInsert(str1, str2);
  }
  return false;
}

function oneEditReplace(s1, s2) {
  let alreadyFoundDiff = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      //if already found the difference in previous increment, meaning it needs
      //more than one edit away -> return false for result
      if (alreadyFoundDiff) return false;
      alreadyFoundDiff = true;
    }
  }
  return true; //either two strings are identical, or only one edit away
}

/** Check if two strings are exactly one edit away (s1 is shorter than s2) */
function oneEditInsert(s1, s2) {
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < s1.length && pointer2 < s2.length) {
    if (s1[pointer1] !== s2[pointer2]) {
      //if found a difference at different indexes, meant already shifted one over
      //earlier -> return false for result
      if (pointer1 !== pointer2) return false;
      //since s2 is longer, if found diff, it must be in s2 -> move s2 pointer forward
      pointer2++;
    }
    else {
      pointer1++;
      pointer2++;
    }
  }

  return true;
}



module.exports = oneEditAway;