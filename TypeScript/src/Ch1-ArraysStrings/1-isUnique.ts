// Implement an algorithm to determine
// if a string has all unique characters.
// What if you cannot use additional data structures?

// Solution 1: Use a Set
// Time Complexity: O(n)
// Space Complexity: O(n)
export const isUniqueSet = (str: string): boolean => {
  const set = new Set();
  for (const char of str) {
    if (set.has(char)) return false;
    set.add(char);
  }
  return true;
};

// Solution 2: Use a boolean array
// Time Complexity: O(n)
// Space Complexity: O(1)
export const isUniqueBooleanArray = (str: string): boolean => {
  if (str.length > 128) return false;
  const arr = new Array(128).fill(false);
  for (const char of str) {
    const idx = char.charCodeAt(0);
    if (arr[idx]) return false;
    arr[idx] = true;
  }
  return true;
};

// Solution 3: Sort the string and check for duplicates
// Time Complexity: O(n log n)
// Space Complexity: O(1)
export const isUniqueSort = (str: string): boolean => {
  const sorted = str.split('').sort().join('');
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) return false;
  }
  return true;
};

// Solution 4: Double loop
// Time Complexity: O(n^2)
// Space Complexity: O(1)
export const isUniqueDoubleLoop = (str: string): boolean => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};
