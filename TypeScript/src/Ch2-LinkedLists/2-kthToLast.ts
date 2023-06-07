// Implement an algorithm to find the kth to last element of a singly linked list.

import { SinglyLinkedList } from 'DataStructures/LinkedList';
import { CustomNode } from 'DataStructures/Node';

// Solution #1: Known length
// Time Complexity: O(n)
// Space Complexity: O(1)
export const kthToLastSize = <T>(
  list: SinglyLinkedList<T>,
  k: number
): CustomNode<T> | null => {
  if (k > list.length) return null;

  let currentNode = list.head;

  for (let i = 0; i < list.length - k; i++) {
    currentNode = currentNode!.next;
  }

  return currentNode;
};

// Solution #2: Unknown length
// Time Complexity: O(n)
// Space Complexity: O(1)
export const kthToLastUnknownSize = <T>(
  list: SinglyLinkedList<T>,
  k: number
): CustomNode<T> | null => {
  let p1 = list.head;
  let p2 = list.head;

  // Move p1 k nodes into the list
  for (let i = 0; i < k; i++) {
    if (!p1) return null;
    p1 = p1.next;
  }

  // Move them at the same pace. When p1 hits the end, p2 will be at the right element
  while (p1) {
    p1 = p1.next;
    p2 = p2!.next;
  }

  return p2;
};
