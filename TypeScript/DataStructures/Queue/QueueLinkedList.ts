import IQueue from './interface';
import { SinglyLinkedList } from '../LinkedList';

export default class QueueLinkedList<T> implements IQueue<T> {
  private _queue: SinglyLinkedList<T>;

  constructor(initialValue: T | T[] = []) {
    this._queue = new SinglyLinkedList<T>(initialValue);
  }

  enqueue(item: T): void {
    this._queue.append(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) return null;
    const item = this._queue.head!.value;
    this._queue.deleteHead();
    return item;
  }

  peek(): T | null {
    if (this.isEmpty()) return null;
    return this._queue.head!.value;
  }

  isEmpty(): boolean {
    return this._queue.isEmpty();
  }

  toArray(): T[] {
    return this._queue.toArray();
  }

  toString(): string {
    return this._queue.toString();
  }
}
