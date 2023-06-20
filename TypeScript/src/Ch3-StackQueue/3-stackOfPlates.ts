// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
// behave identically to a single stack (that is, pop() should return the same values
// as it would if there were just a single stack).

// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific
// sub-stack.
import { StackArray, IStack } from '../../DataStructures/Stack';

export class SetOfStacks<T> implements IStack<T> {
  private _stacks: StackArray<T>[];

  constructor(private readonly _capacity: number) {
    this._stacks = [];
  }

  push(item: T): void {
    if (this.isEmpty() || this._isCurrentStackFull()) this._createStack();
    this._stacks[this._stacks.length - 1].push(item);
  }

  pop(): T | null {
    if (this.isEmpty()) return null;
    const item = this._stacks[this._stacks.length - 1].pop();
    if (this._isCurrentStackEmpty() && !this._isLastStack()) this._removeLastStack();
    return item;
  }

  popAt(stackIdx: number): T | null {
    if (stackIdx < 0 || stackIdx >= this._stacks.length) return null;
    const item = this._stacks[stackIdx].pop();

    for (let i = stackIdx; i < this._stacks.length - 1; i++) {
      const nextStack = this._stacks[i + 1];
      const lastItem = nextStack.pop();
      this._stacks[i].push(lastItem!);
    }

    if (this._isCurrentStackEmpty() && !this._isLastStack()) this._removeLastStack();
    return item;
  }

  peek(): T | null {
    if (this.isEmpty()) return null;
    return this._stacks[this._stacks.length - 1].peek();
  }

  isEmpty(): boolean {
    return this._stacks.length === 0;
  }

  toString(): string {
    return this._stacks.map(stack => stack.toString()).join('\n');
  }

  toArray(): T[] {
    return this._stacks.reduce((acc, stack) => {
      return [...acc, ...stack.toArray()];
    }, [] as T[]);
  }

  private _createStack(): void {
    this._stacks.push(new StackArray<T>([], this._capacity));
  }

  private _removeLastStack(): void {
    this._stacks.pop();
  }

  private _isCurrentStackFull(): boolean {
    return this._stacks[this._stacks.length - 1].isFull();
  }

  private _isCurrentStackEmpty(): boolean {
    return this._stacks[this._stacks.length - 1].isEmpty();
  }

  private _isLastStack(): boolean {
    return this._stacks.length === 1;
  }
}
