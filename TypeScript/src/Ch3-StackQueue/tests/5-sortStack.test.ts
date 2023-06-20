// import { sortStack } from '../5-sortStack';
import { StackArray } from '../../../DataStructures';

describe('Chapter 3 - Question 5: Sort Stack', () => {
  test('Solution #1: Sort Stack', () => {
    const stack = new StackArray<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.toString()).toBe('1,2,3,4,5');
  });
});
