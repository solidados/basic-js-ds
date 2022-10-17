const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value, next = nul) {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    /* const node = new Node(value); // Вместо { key: data, next: null }; указываю вспомогательный класс
    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }
    this.tail = node; */

    let node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail = node;
      this.tail.next = node;
    }
  }

  dequeue(value) {
    let presentPosition = this.head;
    this.head = this.head.next;
    return presentPosition.value;

    /* const node = new Node(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    } */
  }
}

module.exports = {
  Queue
};
