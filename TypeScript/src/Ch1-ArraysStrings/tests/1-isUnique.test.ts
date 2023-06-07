import { isUniqueSet, isUniqueBooleanArray, isUniqueSort, isUniqueDoubleLoop } from '../1-isUnique';

describe('isUnique', () => {
  test('using a set', () => {
    expect(isUniqueSet('abcdef')).toBe(true);
    expect(isUniqueSet('abcdea')).toBe(false);
    expect(isUniqueSet('')).toBe(true);
    expect(isUniqueSet('a')).toBe(true);
    expect(isUniqueSet('aa')).toBe(false);
    expect(isUniqueSet('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  test('using a boolean array', () => {
    expect(isUniqueBooleanArray('abcdef')).toBe(true);
    expect(isUniqueBooleanArray('abcdea')).toBe(false);
    expect(isUniqueBooleanArray('')).toBe(true);
    expect(isUniqueBooleanArray('a')).toBe(true);
    expect(isUniqueBooleanArray('aa')).toBe(false);
    expect(isUniqueBooleanArray('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  test('using sorting', () => {
    expect(isUniqueSort('abcdef')).toBe(true);
    expect(isUniqueSort('abcdea')).toBe(false);
    expect(isUniqueSort('')).toBe(true);
    expect(isUniqueSort('a')).toBe(true);
    expect(isUniqueSort('aa')).toBe(false);
    expect(isUniqueSort('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  test('using double loop', () => {
    expect(isUniqueDoubleLoop('abcdef')).toBe(true);
    expect(isUniqueDoubleLoop('abcdea')).toBe(false);
    expect(isUniqueDoubleLoop('')).toBe(true);
    expect(isUniqueDoubleLoop('a')).toBe(true);
    expect(isUniqueDoubleLoop('aa')).toBe(false);
    expect(isUniqueDoubleLoop('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });
});
