import { checkPermutation } from '../2-checkPermutation';

describe('check permutation', () => {
  test('using a map', () => {
    expect(checkPermutation('abcdef', 'fedcba')).toBe(true);
  });
});
