// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
//
// Example:
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco cta", etc.)
//
const SPACE = ' ';

// Solution 1: Using a HashMap
// Time Complexity: O(n)
// Space Complexity: O(n)
export const palindromePermutation = (str: string): boolean => {
  const map = new Map<string, number>();

  for (const char of str) {
    if (char === SPACE) continue;
    const lower = char.toLowerCase();
    if (map.has(lower)) map.set(lower, map.get(lower)! + 1);
    else map.set(lower, 1);
  }

  let oddCount = 0;
  for (const count of map.values()) {
    if (count % 2 === 1) oddCount++;
  }

  return oddCount <= 1;
};
