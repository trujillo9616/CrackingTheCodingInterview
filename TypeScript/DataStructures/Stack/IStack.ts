export default interface IStack<T> {
  push(item: T): void;
  pop(): T | null;
  peek(): T | null;
  isEmpty(): boolean;
  toArray(): T[];
  toString(): string;
}
