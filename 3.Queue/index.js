// *************************************************** QUEUE ***************************************************

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  end() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.queue[this.size() - 1];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  print() {
    return this.queue;
  }
}

// let a = new Queue();

// a.enqueue(1);
// a.enqueue(2);
// a.enqueue(3);
// a.dequeue();

// console.log(a.front());
// console.log(a.end());

// *************************************************** PRIORITY QUEUE ***************************************************

class PriorityQueue {
  constructor() {
    this.priorityQueue = [];
  }

  enqueue(value) {
    if (this.isEmpty()) {
      this.priorityQueue.push(value);
    } else {
      // we use var added because id the value priority is not greater than any priority then added = false, so we will push the element.
      var added = false;
      for (let i = 0; i < this.size(); i++) {
        if (value[1] > this.priorityQueue[i][1]) {
          this.priorityQueue.splice(i, 0, value);
          added = true;
          break;
        }
      }

      if (!added) {
        this.priorityQueue.push(value);
      }
    }
  }

  dequeue() {
    this.priorityQueue.shift();
  }

  front() {
    return this.priorityQueue[0];
  }

  frontValue() {
    return this.front()[0];
  }

  frontPriority() {
    return this.front()[1];
  }

  end() {
    if (this.size() === 0) {
      return "Priority Queue is empty";
    }
    return this.priorityQueue[this.size() - 1];
  }

  endValue() {
    if (this.end() === "Priority Queue is empty") {
      return this.end();
    } else {
      return this.end()[0];
    }
  }

  endPriority() {
    if (this.end() === "Priority Queue is empty") {
      return this.end();
    } else {
      return this.end()[1];
    }
  }

  size() {
    return this.priorityQueue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  print() {
    return this.priorityQueue;
  }

  printValues() {
    let k = this.priorityQueue.map((x) => x[0]);
    return k;
  }

  printPriorities() {
    let k = this.priorityQueue.map((x) => x[1]);
    return k;
  }
}

let a = new PriorityQueue();

a.enqueue(["nani", 19]);
a.enqueue(["nandu", 21]);
a.enqueue(["avinash", 20]);

console.log(a.front());
console.log(a.frontValue());
console.log(a.frontPriority());
console.log(a.end());
console.log(a.endValue());
console.log(a.endPriority());
console.log(a.print());
console.log(a.printValues());
console.log(a.printPriorities());
console.log(a.isEmpty());
