// Write code to remove duplicates from an unsorted linked list.

import { SinglyLinkedList } from '../../DataStructures/LinkedList';

// Solution #1: Using a Set
// Time Complexity: O(n)
// Space Complexity: O(n)
export const removeDupsBuffer = <T>(list: SinglyLinkedList<T>): SinglyLinkedList<T> => {
  const set = new Set<T>();
  let currentNode = list.head;
  let idx = 0;

  while (currentNode) {
    if (set.has(currentNode.value)) {
      list.remove(idx);
    } else {
      set.add(currentNode.value);
      idx++;
    }
    currentNode = currentNode.next;
  }

  return list;
};

// Solution #2: Using a Runner
// Time Complexity: O(n^2)
// Space Complexity: O(1)
export const removeDupsRunner = <T>(list: SinglyLinkedList<T>): SinglyLinkedList<T> => {
  let currentNode = list.head;

  while (currentNode) {
    let runner = currentNode;
    while (runner.next) {
      if (runner.next.value === currentNode.value) {
        runner.next = runner.next.next;
        list.length--;
      } else {
        runner = runner.next;
      }
    }
    currentNode = currentNode.next;
  }

  return list;
};
