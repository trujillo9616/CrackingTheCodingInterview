import LinkedList from "./LinkedList.js";

export default class Queue {
    constructor(value) {
        this.queue = new LinkedList(value);
        this.first = this.queue.head;
        this.last = this.queue.tail;
    }

    enqueue(value) {
        this.queue.append(value);
        this.updateQueue();
        return this.queue.printList();
    }

    dequeue() {
        const unwantedValue = this.queue.delete(0);
        this.updateQueue();
        return unwantedValue;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.first;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    updateQueue() {
        this.first = this.queue.head;
        this.last = this.queue.tail;
    }

    printList() {
        return this.queue.printList();
    }
}

const myQueue = new Queue(1);

myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();


console.log(myQueue);
console.log(myQueue.printList());
