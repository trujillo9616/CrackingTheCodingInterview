// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to
// check if they are one edit (or zero edits) away.

// EXAMPLE:
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

// Solution #1: Using Hash Maps
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
export const oneAway = (str1: string, str2: string): boolean => {
  const map = new Map<string, number>();
  for (const char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of str2) {
    map.set(char, map.get(char)! - 1);
    if (map.get(char) === 0) map.delete(char);
  }

  return map.size <= 2;
};

// Solution #2:
// Time Complexity: O(n)
// Space Complexity: O(1)
export const oneAway2 = (str1: string, str2: string): boolean => {
  const oneEditReplace = (str1: string, str2: string): boolean => {
    let foundDifference = false;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        if (foundDifference) return false;
        foundDifference = true;
      }
    }
    return true;
  };

  const oneEditInsert = (str1: string, str2: string): boolean => {
    let idx1 = 0,
      idx2 = 0;
    while (idx1 < str1.length && idx2 < str2.length) {
      if (str1[idx1] !== str2[idx2]) {
        if (idx1 !== idx2) return false;
        idx2++;
      } else {
        idx1++;
        idx2++;
      }
    }
    return true;
  };

  if (str1.length === str2.length) {
    return oneEditReplace(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return oneEditInsert(str1, str2);
  } else if (str1.length - 1 === str2.length) {
    return oneEditInsert(str2, str1);
  }
  return false;
};
