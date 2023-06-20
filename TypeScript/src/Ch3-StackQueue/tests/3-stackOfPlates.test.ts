import { SetOfStacks } from '../3-stackOfPlates';

describe('Chapter 3 - Question 3: Stack of Plates', () => {
  test('Solution #1: Set of Stacks', () => {
    const setOfStacks = new SetOfStacks<number>(3);
    setOfStacks.push(1);
    setOfStacks.push(2);
    setOfStacks.push(3);
    setOfStacks.push(4);
    setOfStacks.push(5);
    setOfStacks.push(6);
    setOfStacks.push(7);
    setOfStacks.push(8);
    setOfStacks.push(9);
    setOfStacks.push(10);

    expect(setOfStacks.toString()).toBe(`1,2,3\n4,5,6\n7,8,9\n10`);
  });
});
