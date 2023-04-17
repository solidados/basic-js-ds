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
  constructor() {
    this.head = null;
    this.length = 0;
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

    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      // this.tail = node;
    } else {
      let last = this.head;
      
      // this.tail = node;
      // this.tail.next = node;
      while (last.next) {
        last = last.next;
      }
      last.next = node;
    }
  }

  dequeue() {
    let currentPosition = this.head;
    this.head = currentPosition.next;
    return currentPosition.value;

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
