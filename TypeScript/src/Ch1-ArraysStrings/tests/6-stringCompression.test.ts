import { stringCompression, stringCompressionDoublePass } from '../6-stringCompression';

describe('stringCompression', () => {
  test('solution', () => {
    expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompression('abcdef')).toBe('abcdef');
    expect(stringCompression('aabbccddeeff')).toBe('aabbccddeeff');
    expect(stringCompression('aabbccddeeffa')).toBe('aabbccddeeffa');
  });

  test('solutionDoublePass', () => {
    expect(stringCompressionDoublePass('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompressionDoublePass('abcdef')).toBe('abcdef');
    expect(stringCompressionDoublePass('aabbccddeeff')).toBe('aabbccddeeff');
    expect(stringCompressionDoublePass('aabbccddeeffa')).toBe('aabbccddeeffa');
  });
});
