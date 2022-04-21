export default class Queue {
    constructor(value) {
        this.queue = [];
        this.first = null;
        this.last = null;

        if (value) this.enqueue(value);
    }

    enqueue(value) {
        this.queue.push(value);
        this.last = this.queue[this.queue.length - 1];
        if (this.queue.length === 1) {
            this.first = this.queue[0];
        }
        return this.queue;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;

        const unwantedValue = this.queue.shift();
        if (this.isEmpty()) {
            this.first = null;
            this.last = null;
        } else this.first = this.queue[0];
        return unwantedValue;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.first;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
