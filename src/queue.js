const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    // если нет ссылки на head
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // если только один элемент
    if (!this.head.next) {
      this.head.next = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if(!this.head){
      return;
    }
    if(!this.head.next){
      let currentHead=this.head;
      this.head=null;
      return currentHead.value;
    }else{
      let currentHead=this.head.value;
      this.head=this.head.next;
      console.log(currentHead);
      return currentHead;
    }
  }
}

module.exports = {
  Queue,
};
