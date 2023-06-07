// Given two strings, write a method to decide if one
// is a permutation of the other.
// A permutation of a string is defined as another string
// that contains the same characters, but the order can be different.

// Solution 1: Using a HashMap
// Time Complexity: O(n + m)
// Space Complexity: O(n)
export const checkPermutation = (str1: string, str2: string): boolean => {
  const map = new Map<string, number>();

  for (const char of str1) {
    if (map.has(char)) map.set(char, map.get(char)! + 1);
    else map.set(char, 1);
  }

  for (const char of str2) {
    if (map.has(char)) {
      map.set(char, map.get(char)! - 1);
      if (map.get(char) === 0) map.delete(char);
    } else return false;
  }

  return map.size === 0;
};
