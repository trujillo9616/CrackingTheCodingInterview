// Implement an algorithm to delete a node in the middle (i.e., any node but the first and
// last node, not necessarily the exact middle) of a singly linked list, given only access to
// that node.

import { CustomNode } from '../../DataStructures';

// Solution #1: Replace the node with the next node
// Time Complexity: O(1)
// Space Complexity: O(1)
export const deleteMiddleNode = <T>(node: CustomNode<T>): boolean => {
  if (!node || !node.next) return false;

  const nextNode = node.next;
  node.value = nextNode.value;
  node.next = nextNode.next;

  return true;
};
