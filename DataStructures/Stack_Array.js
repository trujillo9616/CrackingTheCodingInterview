class Stack {
    constructor(value) {
        this.stack = [];
        this.top = null;
        this.bottom = null;

        if (value) {
            this.push(value);
        }
    }

    peek() {
        if (!this.isEmpty()) return this.top;
    }

    push(value) {
        this.stack.push(value);
        this.updateStack();

        if (this.stack.length === 1) {
            this.bottom = this.stack[0];
        }
        return this.stack;
    }

    pop() {
        if (this.isEmpty()) return undefined;

        const unwantedValue = this.stack.pop();
        if (this.isEmpty()) {
            this.top = null;
            this.bottom = null;
        } else this.updateStack();
        return unwantedValue;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    updateStack() {
        this.top = this.stack[this.stack.length - 1];
    }
}
