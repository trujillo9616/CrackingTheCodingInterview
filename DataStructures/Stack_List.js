import LinkedList from './LinkedList.js';

class Stack {
    constructor(value) {
        this.stack = new LinkedList(value);
        this.top = this.stack.tail;
        this.bottom = this.stack.head;
    }

    peek() {
        if (this.stack.length) return this.top;
    }

    push(value) {
        this.stack.append(value);
        this.updateStack();
        return this.printStack();
    }

    pop() {
        if (!this.top) return null;
        let deleted = this.stack.delete(this.stack.length - 1);
        this.updateStack();
        return deleted;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        return this.stack.printList();
    }

    updateStack() {
        this.top = this.stack.tail;
        this.bottom = this.stack.head;
    }
}
