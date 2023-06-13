// You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1's digit is at the head
// of the list. Write a function that adds the two numbers and returns the sum as a
// linked list.

import { CustomNode, SinglyLinkedList } from '../../DataStructures';

// Solution #1: Iterate through both lists and add the values
// Time Complexity: O(n)
// Space Complexity: O(n)
export const sumListsReverse = (
  list1: SinglyLinkedList<number>,
  list2: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
  const result = new SinglyLinkedList<number>();
  let carry = 0;
  let node1: CustomNode<number> | null = list1.head;
  let node2: CustomNode<number> | null = list2.head;

  while (node1 || node2 || carry) {
    const sum = (node1?.value || 0) + (node2?.value || 0) + carry;
    const value = sum % 10;
    carry = Math.floor(sum / 10);

    result.append(value);

    if (node1) node1 = node1.next;
    if (node2) node2 = node2.next;

    if (!node1 && !node2 && carry) result.append(carry);
  }

  return result;
};

// Solution #2: Values are stored in forward order
// Time Complexity: O(n)
// Space Complexity: O(n)
export const sumListsForward = (
  list1: SinglyLinkedList<number>,
  list2: SinglyLinkedList<number>
): SinglyLinkedList<number> => {
  // Get the length of both lists and pad the shorter list with zeros
  if (list1.length !== list2.length) {
    const [largerList, smallerList] =
      list1.length > list2.length ? [list1, list2] : [list2, list1];
    const diff = largerList.length - smallerList.length;

    for (let i = 0; i < diff; i++) {
      smallerList.prepend(0);
    }
  }

  // Add the values recuirsevly
  const sumList = new SinglyLinkedList<number>();

  const sumValuesRecursive = (
    node1: CustomNode<number> | null,
    node2: CustomNode<number> | null
  ): { carry: number; node: CustomNode<number> } | null => {
    if (!node1 && !node2) {
      return null;
    }

    const prevValue = sumValuesRecursive(node1!.next, node2!.next);
    const sum = node1!.value + node2!.value + (prevValue ? prevValue.carry : 0);

    const node = new CustomNode<number>(sum % 10);
    sumList.prepend(node);

    return { carry: Math.floor(sum / 10), node };
  };

  const result = sumValuesRecursive(list1.head, list2.head);

  if (result?.carry) {
    sumList.prepend(new CustomNode<number>(result.carry));
  }

  return sumList;
};
