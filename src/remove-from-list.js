const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers list and an integer k,
 * remove all elements from list list that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For list = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let prev = null,
    curr = list;

  while (curr.next) {
    if (curr.value == k) {
      if (prev) {
        prev.next = curr.next;
      } else {
        list = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;

    if (curr.value == k) {
      prev.next = curr.next;
    }
  }
  return list;
}

module.exports = {
  removeKFromList
};
