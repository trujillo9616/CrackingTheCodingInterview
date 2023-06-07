import { removeDupsBuffer, removeDupsRunner } from '../1-removeDups';
import { SinglyLinkedList } from '../../../DataStructures/LinkedList';

const list1 = new SinglyLinkedList<number>([1, 2, 2, 2, 3, 4, 5, 5, 5]);
const list2 = new SinglyLinkedList<number>([1, 2, 3, 4, 5]);
const list3 = new SinglyLinkedList<number>([1, 1, 1, 1, 1]);

describe('remove duplicates', () => {
  test('using a buffer', () => {
    expect(removeDupsBuffer(list1).toString()).toBe('1 -> 2 -> 3 -> 4 -> 5');
    expect(removeDupsBuffer(list2).toString()).toBe('1 -> 2 -> 3 -> 4 -> 5');
    expect(removeDupsBuffer(list3).toString()).toBe('1');
  });

  test('using a runner', () => {
    expect(removeDupsRunner(list1).toString()).toBe('1 -> 2 -> 3 -> 4 -> 5');
    expect(removeDupsRunner(list2).toString()).toBe('1 -> 2 -> 3 -> 4 -> 5');
    expect(removeDupsRunner(list3).toString()).toBe('1');
  });
});
