"use strict";

/** implement an algorithm to delete a node in the middle(any node but the first
 * and last node, not nexessarily exactly in the middle) of a singly linked list,
 * given only access to that node
 */

  //Pseudocode:
  //-copy the data of next of given node into given node, then get rid of next node
  class Node {
    constructor (val = null) {
      this.val = val;
      this.next = next;
    }
  }

  function removeGivenNode(node) {
    if (!node || !node.next) return;
    node.val = node.next.val;
    node.next = node.next.next;
  }