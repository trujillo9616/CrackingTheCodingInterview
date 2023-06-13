import type { ILinkedList } from './interface';
import { CustomNode } from '../Node';

export default class SinglyLinkedList<T> implements ILinkedList<T> {
  public head: CustomNode<T> | null;
  public tail: CustomNode<T> | null;
  public length: number;

  constructor(value: CustomNode<T> | T[] | T | null = null) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (value) {
      this.append(value);
    }
  }

  public append(value: CustomNode<T> | T[] | T) {
    if (value instanceof CustomNode) {
      if (!this.head) {
        this.head = value;
        this.tail = value;
      } else {
        this.tail!.next = value;
        this.tail = value;
      }
      this.length++;
    } else if (Array.isArray(value)) {
      value.forEach(item => this.append(item));
    } else {
      this.append(new CustomNode(value));
    }
    return this;
  }

  public prepend(value: CustomNode<T> | T[] | T) {
    if (value instanceof CustomNode) {
      if (!this.head) {
        this.head = value;
        this.tail = value;
      } else {
        value.next = this.head;
        this.head = value;
      }
      this.length++;
    } else if (Array.isArray(value)) {
      value.reverse().forEach(item => this.prepend(item));
    } else {
      this.prepend(new CustomNode(value));
    }
    return this;
  }

  public insert(index: number, value: CustomNode<T> | T[] | T): ILinkedList<T> | null {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);

    if (!(value instanceof CustomNode) && !Array.isArray(value)) {
      value = new CustomNode(value);
    }

    let currentNode = this.head;
    let previousNode: CustomNode<T> | null = null;

    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode!.next;
    }

    if (value instanceof CustomNode) {
      previousNode!.next = value;
      value.next = currentNode;
      this.length++;
      return this;
    }

    const linkedList = new SinglyLinkedList<T>(value);
    previousNode!.next = linkedList.head;
    linkedList.tail!.next = currentNode;
    this.length += linkedList.length;
    return this;
  }

  public remove(index: number) {
    if (index < 0 || index >= this.length) return null;
    let currentNode: CustomNode<T> | null = this.head;
    let previousNode: CustomNode<T> | null = null;

    if (index === 0) {
      this.head = currentNode!.next;
      this.length--;
      return currentNode;
    } else {
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode!.next;
      }
      previousNode!.next = currentNode!.next;
      this.length--;
      return currentNode;
    }
  }

  public get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let currentNode: CustomNode<T> | null = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }
    return currentNode;
  }

  public set(index: number, value: CustomNode<T> | T) {
    const node = this.get(index);
    if (!node) return false;
    if (value instanceof CustomNode) {
      node.value = value.value;
    } else {
      node.value = value;
    }
    return true;
  }

  public size() {
    return this.length;
  }

  public isEmpty() {
    return this.length === 0;
  }

  public deleteHead() {
    return this.remove(0);
  }

  public toArray() {
    if (!this.head) return [];
    const array = new Array<T>();
    let currentNode: CustomNode<T> | null = this.head;
    let idx = 0;

    while (currentNode) {
      array[idx++] = currentNode.value;
      currentNode = currentNode.next;
    }

    return array;
  }

  public toString() {
    return this.toArray().join(' -> ');
  }
}
