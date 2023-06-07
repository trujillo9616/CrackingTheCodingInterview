import { zeroMatrix } from '../8-zeroMatrix';

describe('zeroMatrix', () => {
  test('array solution', () => {
    expect(
      zeroMatrix([
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9],
      ])
    ).toEqual(
      expect.arrayContaining([
        [1, 0, 3],
        [0, 0, 0],
        [7, 0, 9],
      ])
    );
  });
});
