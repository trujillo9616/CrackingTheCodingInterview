import { SinglyLinkedList } from '../../../DataStructures';
import { sumListsReverse, sumListsForward } from '../5-sumLists';

describe('Chapter 2 - Question 5: Sum Lists', () => {
  test('Solution #1: Iterate through both lists and add the values', () => {
    const list1 = new SinglyLinkedList<number>([7, 1, 6]);
    const list2 = new SinglyLinkedList<number>([5, 9, 2]);
    const result = sumListsReverse(list1, list2);
    expect(result.toString()).toBe('2 -> 1 -> 9');
  });

  test('Solution #2: Forward order', () => {
    const list1 = new SinglyLinkedList<number>([6, 1, 7]);
    const list2 = new SinglyLinkedList<number>([2, 9, 5]);
    const result = sumListsForward(list1, list2);
    expect(result.toString()).toBe('9 -> 1 -> 2');
  });
});
