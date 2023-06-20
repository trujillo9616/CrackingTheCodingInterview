// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array). The stack supports the
// following operations: push, pop, peek, and isEmpty.

import { StackArray } from '../../DataStructures';

// Solution #1
// Time complexity: O(n^2)
// Space complexity: O(n)
export function sortStack<T>(stack: StackArray<T>): void {
  const tempStack = new StackArray<T>();

  while (!stack.isEmpty()) {
    const temp = stack.pop();
    while (!tempStack.isEmpty() && tempStack.peek()! > temp!) {
      stack.push(tempStack.pop()!);
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop()!);
  }

  return;
}
