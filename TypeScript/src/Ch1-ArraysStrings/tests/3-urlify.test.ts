import { urlifyArray, urlifyPointers } from '../3-urlify';

describe('urlify', () => {
  test('using extra array', () => {
    expect(urlifyArray('Mr 3ohn Smith    ', 13)).toBe('Mr%203ohn%20Smith');
  });

  test('using two pointers', () => {
    expect(urlifyPointers('Mr 3ohn Smith    ', 13)).toBe('Mr%203ohn%20Smith');
  });
});
