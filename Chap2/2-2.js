"use strict";


/** Implement an algorithm to find the kth to last element
 * of a single linked list.
 *
 * Ex: Input: 1->3->4->2->6, 2
 * Output: 2 (second to last node of list)
 */

//Pseudocode:
// - has 2 pointers, start them both at head
// - move first pointer to be k spaces ahead of second pointer
// - move both by one space at a time, until first pointer reaches the end
// - now, second pointer is k spaces before first pointer, or kth spaces to last el

class Node {
  contructor(val = null) {
    this.val = val;
    this.next = next;
  }
}

function kthToLast(head, k) {
  let fP = head;
  let sP = head;

  //move first pointer to be k spaces ahead of sP
  for (let i = 0; i < k; i++) {
    if (fP === null) return null;
    fP = fP.next;
  }
 //incerement both pointers until fP reaches the end, then sP is kth to last
  while (fP !== null) {
    fP = fP.next;
    sP = sP.next;
  }
  return sP;
}


