class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek() {
    return this.first.value;
  }

  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    if (this.first === null) {
      return;
    }
    let currNode = this.first;
    let outputArray = [];

    while (currNode !== null) {
      outputArray.push(currNode.value);
      currNode = currNode.next;
    }
    return outputArray;
  }
}

module.exports = Queue;
