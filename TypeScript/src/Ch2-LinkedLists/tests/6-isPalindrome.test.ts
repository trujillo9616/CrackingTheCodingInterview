import { SinglyLinkedList } from '../../../DataStructures';
import { isPalindromeSplitReverse, isPalindromeStack } from '../6-isPalindrome';

describe('Chapter 2 - Question 6: Palindrome', () => {
  test('Solution #1: Split and reverse', () => {
    const list1 = new SinglyLinkedList<number>([1, 2, 3, 2, 1]);
    const result1 = isPalindromeSplitReverse(list1);
    expect(result1).toBe(true);

    const list2 = new SinglyLinkedList<number>([1, 2, 3, 3, 2, 1]);
    const result2 = isPalindromeSplitReverse(list2);
    expect(result2).toBe(true);

    const list3 = new SinglyLinkedList<number>([1, 2, 3, 4, 2, 1]);
    const result3 = isPalindromeSplitReverse(list3);
    expect(result3).toBe(false);
  });

  test('Solution #1: Using a stack', () => {
    const list1 = new SinglyLinkedList<number>([1, 2, 3, 2, 1]);
    const result1 = isPalindromeStack(list1);
    expect(result1).toBe(true);

    const list2 = new SinglyLinkedList<number>([1, 2, 3, 3, 2, 1]);
    const result2 = isPalindromeStack(list2);
    expect(result2).toBe(true);

    const list3 = new SinglyLinkedList<number>([1, 2, 3, 4, 2, 1]);
    const result3 = isPalindromeStack(list3);
    expect(result3).toBe(false);
  });
});
