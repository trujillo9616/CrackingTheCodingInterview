// Implement a MyQueue class which implements a queue using two stacks.

import { StackArray, IQueue } from '../../DataStructures';

// Solution #1: Using an input and output stack
// Time complexity: O(1) for enqueue, O(n) for dequeue
// Space complexity: O(n)
export class MyQueue<T> implements IQueue<T> {
  private _inputStack: StackArray<T>;
  private _outputStack: StackArray<T>;

  constructor(initialValue: T | T[] = []) {
    this._inputStack = new StackArray<T>(initialValue);
    this._outputStack = new StackArray<T>();
  }

  enqueue(item: T): void {
    this._inputStack.push(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) return null;
    if (this._outputStack.isEmpty()) this._transferStacks();
    return this._outputStack.pop();
  }

  peek(): T | null {
    if (this.isEmpty()) return null;
    if (this._outputStack.isEmpty()) this._transferStacks();
    return this._outputStack.peek();
  }

  isEmpty(): boolean {
    return this._inputStack.isEmpty() && this._outputStack.isEmpty();
  }

  toArray(): T[] {
    return [...this._inputStack.toArray(), ...this._outputStack.toArray()];
  }

  toString(): string {
    return [...this._inputStack.toArray(), ...this._outputStack.toArray()].toString();
  }

  private _transferStacks(): void {
    while (!this._inputStack.isEmpty()) {
      this._outputStack.push(this._inputStack.pop()!);
    }
  }
}
