import { SinglyLinkedList } from '../../../DataStructures/LinkedList';

import { kthToLastSize, kthToLastUnknownSize } from '../2-kthToLast';

const list1 = new SinglyLinkedList<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const list2 = new SinglyLinkedList<number>([1, 2, 3, 4]);

describe('Chapter 2 - Question 2: Return Kth to Last', () => {
  test('Solution #1: Known length', () => {
    expect(kthToLastSize(list1, 3)?.value).toBe(7);
    expect(kthToLastSize(list1, 9)?.value).toBe(1);
    expect(kthToLastSize(list1, 1)?.value).toBe(9);
    expect(kthToLastSize(list1, 0)).toBeNull();
    expect(kthToLastSize(list1, 10)).toBeNull();
    expect(kthToLastSize(list2, 3)?.value).toBe(2);
    expect(kthToLastSize(list2, 4)?.value).toBe(1);
    expect(kthToLastSize(list2, 1)?.value).toBe(4);
    expect(kthToLastSize(list2, 0)).toBeNull();
  });

  test('Solution #2: Unknown length', () => {
    expect(kthToLastUnknownSize(list1, 3)?.value).toBe(7);
    expect(kthToLastUnknownSize(list1, 9)?.value).toBe(1);
    expect(kthToLastUnknownSize(list1, 1)?.value).toBe(9);
    expect(kthToLastUnknownSize(list1, 0)).toBeNull();
    expect(kthToLastUnknownSize(list1, 10)).toBeNull();
    expect(kthToLastUnknownSize(list2, 3)?.value).toBe(2);
    expect(kthToLastUnknownSize(list2, 4)?.value).toBe(1);
    expect(kthToLastUnknownSize(list2, 1)?.value).toBe(4);
    expect(kthToLastUnknownSize(list2, 0)).toBeNull();
  });
});
