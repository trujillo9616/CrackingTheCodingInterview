import { SinglyLinkedList } from '../../../DataStructures';
import { deleteMiddleNode } from '../3-deleteMiddleNode';

const list = new SinglyLinkedList<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const node1 = list.head?.next?.next?.next;

describe('Chapter 2 - Question 3: Delete Middle Node', () => {
  test('Solution #1: Replace the node with the next node', () => {
    expect(deleteMiddleNode(node1!)).toBe(true);
    expect(list.toString()).toBe('1 -> 2 -> 3 -> 5 -> 6 -> 7 -> 8 -> 9');
  });
});
