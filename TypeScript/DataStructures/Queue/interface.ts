export default interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | null;
  peek(): T | null;
  isEmpty(): boolean;
  toArray(): T[];
  toString(): string;
}
