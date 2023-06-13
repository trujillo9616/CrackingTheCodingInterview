import IStack from './IStack';
export default class StackArray<T> implements IStack<T> {
  private stack: T[];
  private maxSize: number;

  constructor(items?: T | T[], maxLength?: number) {
    this.stack = [];
    this.maxSize = maxLength || Infinity;

    if (items) {
      if (Array.isArray(items)) {
        this.stack.push(...items);
      } else {
        this.stack.push(items);
      }
    }
  }

  public push(item: T): void {
    if (this.isFull()) throw new Error('Stack is full');
    this.stack.push(item);
  }

  public pop(): T | null {
    if (this.isEmpty()) return null;
    return this.stack.pop()!;
  }

  public peek(): T | null {
    if (this.isEmpty()) return null;
    return this.stack[this.stack.length - 1];
  }

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }

  public isFull(): boolean {
    return this.stack.length === this.maxSize;
  }

  public size(): number {
    return this.stack.length;
  }

  public clear(): void {
    this.stack = [];
  }

  public toArray(): T[] {
    return [...this.stack];
  }

  public toString(): string {
    return this.stack.toString();
  }
}
