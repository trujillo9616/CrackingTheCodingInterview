// Implement a function to determine if a linked list is a palindrome.
import { CustomNode, SinglyLinkedList, StackArray } from '../../DataStructures';

// Solution #1: Split and reverse
// Time Complexity: O(n)
// Space Complexity: O(1)
export const isPalindromeSplitReverse = <T>(list: SinglyLinkedList<T>): boolean => {
  const head = list.head;
  if (!head || !head.next) return true;

  // Split the list in half
  const middleNode = getMiddleNode(list.head);
  if (!middleNode) return false;

  // Reverse the second half
  const startMiddle = reverse(middleNode);

  // Compare the first half with the reversed second half
  let node1: CustomNode<T> | null = head;
  let node2: CustomNode<T> | null = startMiddle;

  while (node1 && node2) {
    if (node1.value !== node2.value) return false;
    node1 = node1.next;
    node2 = node2.next;
  }

  return true;
};

const getMiddleNode = <T>(node: CustomNode<T> | null): CustomNode<T> | null => {
  if (!node) return null;
  let fast: CustomNode<T> | null = node;
  let slow: CustomNode<T> | null = node;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  return slow;
};

const reverse = <T>(node: CustomNode<T>): CustomNode<T> => {
  let prev: CustomNode<T> | null = null;
  let current: CustomNode<T> | null = node;

  while (current) {
    const next: CustomNode<T> | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev!;
};

// Solution #2: Using a stack
// Time Complexity: O(n)
// Space Complexity: O(n)
export const isPalindromeStack = <T>(list: SinglyLinkedList<T>): boolean => {
  const stack = new StackArray<T>();
  let currentNode: CustomNode<T> | null = list.head;

  while (currentNode) {
    stack.push(currentNode.value);
    currentNode = currentNode.next;
  }

  currentNode = list.head;

  while (currentNode) {
    if (currentNode.value !== stack.pop()) return false;
    currentNode = currentNode.next;
  }

  return true;
};
