import IQueue from './interface';

export default class QueueArray<T> implements IQueue<T> {
  private queue: T[];

  constructor(initialValue: T | T[] = [], private readonly maxLength: number = Infinity) {
    this.queue = Array.isArray(initialValue) ? initialValue : [initialValue];

    if (this.queue.length > this.maxLength) {
      throw new Error(`Queue length cannot be greater than ${this.maxLength}`);
    }
  }

  enqueue(item: T): void {
    if (this.isFull()) {
      throw new Error('Queue is full');
    }

    this.queue.push(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue.shift()!;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[0];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.queue.length === this.maxLength;
  }

  toArray(): T[] {
    return this.queue;
  }

  toString(): string {
    return this.queue.toString();
  }
}
