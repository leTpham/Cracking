"use strict";

/** Write code to remove duplicates from an unsorted linkedlist
 * Input: linked list = 12->11->12->21->41->43->21
 * Output: 12->11->21->41->43.
*/

class Node {
  val = null;
  next = null;

  constructor(val = null) {
    this.val = val;
    this.next = next;
  }
}

function removeDups(head) {
  const seen = new Set();
  let current = head;
  let prev = null;

  while (current) {
    //if node already been seen
    if (seen.has(current.val)) {
      //link the previous of curr to the next of curr, curr is abandoned
      prev.next = current.next;
    } else {
      //else add it to set
      seen.add(current.value);
      //set our curr to the past, making sure when we move in the prev is updated
      prev = current;

    }
    //incrementing the node
    current = current.next;
  }
  return head;
}


