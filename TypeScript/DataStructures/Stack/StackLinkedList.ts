import IStack from './IStack';
import { SinglyLinkedList } from '../';

export default class StackLinkedList<T> implements IStack<T> {
  private stack: SinglyLinkedList<T>;
  private maxSize: number;

  constructor(item?: T | T[], maxSize?: number) {
    this.stack = new SinglyLinkedList<T>();
    this.maxSize = maxSize || Infinity;

    if (item) {
      if (Array.isArray(item)) {
        this.stack.prepend([...item]);
      } else {
        this.stack.prepend(item);
      }
    }
  }

  public push(item: T): void {
    if (this.isFull()) throw new Error('Stack is full');
    this.stack.prepend(item);
  }

  public pop(): T | null {
    if (this.isEmpty()) return null;
    const item = this.stack.head!.value;
    this.stack.deleteHead();
    return item;
  }

  public peek(): T | null {
    if (this.isEmpty()) return null;
    return this.stack.head!.value;
  }

  public isEmpty(): boolean {
    return this.stack.isEmpty();
  }

  public isFull(): boolean {
    return this.stack.size() === this.maxSize;
  }

  public size(): number {
    return this.stack.size();
  }

  public clear(): void {
    this.stack = new SinglyLinkedList<T>();
  }

  public toArray(): T[] {
    return this.stack.toArray();
  }

  public toString(): string {
    return this.stack.toString();
  }
}
