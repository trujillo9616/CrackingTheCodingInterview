// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.
//
// Example:
// Input: "Mr John Smith    ", 13
// Output: "Mr%20John%20Smith"
//

// Solution 1: Using extra array
// Time Complexity: O(n)
// Space Complexity: O(n)
export const urlifyArray = (str: string, length: number): string => {
  const result = new Array();
  for (let i = 0; i < length; i++) {
    if (str[i] === ' ') {
      result.push('%', '2', '0');
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
};

// Solution 2: Using two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
export const urlifyPointers = (str: string, length: number): string => {
  const strBuilder = str.split('');
  let i = str.length - 1,
    j = length - 1;
  while (j >= 0) {
    if (str[j] === ' ') {
      strBuilder[i--] = '0';
      strBuilder[i--] = '2';
      strBuilder[i--] = '%';
    } else {
      strBuilder[i--] = str[j];
    }
    j--;
  }
  return strBuilder.join('');
};
