import { rotateMatrix } from '../7-rotateMatrix';

describe('rotateMatrix', () => {
  test('layer by layer', () => {
    expect(
      rotateMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual(
      expect.arrayContaining([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ])
    );
  });
});
