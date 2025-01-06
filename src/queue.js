const { NotImplementedError } = require('../extensions/index.js');
const {Node} = require("../extensions/list-tree");

const { ListNode } = require('../extensions/list-node.js');

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
    this.queue = null;
    this.pointer = null;
  }

  getUnderlyingList() {
    return this.queue
  }

  enqueue(value) {
    let element = new ListNode(value);
    if (!this.queue) {
      this.queue = element;
    } else {
      this.pointer.next = element;
    }
    this.pointer = element;
  }

  dequeue() {
    if (!this.queue) return null;

      let deletedElement = this.queue;
      this.queue = this.queue.next;
      if (!this.queue) this.pointer = null;
      return deletedElement.value;

  }
}

module.exports = {
  Queue
};
