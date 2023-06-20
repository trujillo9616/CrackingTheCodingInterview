import { CustomNode } from '../Node';

export default interface ILinkedList<T> {
  head: CustomNode<T> | null;
  tail: CustomNode<T> | null;
  length: number;

  append(value: CustomNode<T> | T[] | T): ILinkedList<T>;
  prepend(node: CustomNode<T> | T[] | T): ILinkedList<T>;
  insert(index: number, item: CustomNode<T> | T[] | T): ILinkedList<T> | null;
  remove(index: number): CustomNode<T> | null;
  get(index: number): CustomNode<T> | null;
  set(index: number, value: CustomNode<T> | T): boolean;
  toArray(): T[];
  toString(): string;
}
