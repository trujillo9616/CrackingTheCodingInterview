// How would you design a stack which, in addition to push and pop, has a function min
// which returns the minimum element? Push, pop and min should all operate in O(1) time.

import { IStack } from '../../DataStructures/Stack';

// Solution 1: Keep track of min in each node
// Time Complexity: O(1)
// Space Complexity: O(n)
export class MinStack<T> implements IStack<T> {
  private stack: T[];
  private minStack: T[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(item: T): void {
    this.stack.push(item);
    if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= item) {
      this.minStack.push(item);
    }
  }

  pop(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');

    const item = this.stack.pop();
    if (item === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return item!;
  }

  peek(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');

    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  min(): T {
    if (this.isEmpty()) throw new Error('Stack is empty');

    return this.minStack[this.minStack.length - 1];
  }

  toString(): string {
    return this.stack.toString();
  }

  toArray(): T[] {
    return this.stack;
  }
}
