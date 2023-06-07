// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2b1c5a3. If the "compressed" string would not become smaller than the
// original string, your method should return the original string. You can assume
// the string has only uppercase and lowercase letters (a - z).

// Solution #1: Single Pass
// Time Complexity: O(n)
// Space Complexity: O(n)
export const stringCompression = (str: string): string => {
  const compressed = new Array();
  let countConsecutive = 0;

  for (let i = 0; i < str.length; i++) {
    countConsecutive++;

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressed.push(str[i]);
      compressed.push(countConsecutive);
      countConsecutive = 0;
    }
  }

  return str.length <= compressed.length ? str : compressed.join('');
};

// Solution #2: Double Pass
// Time Complexity: O(n)
// Space Complexity: O(n)
export const stringCompressionDoublePass = (str: string): string => {
  const countCompression = (str: string): number => {
    let compressedLength = 0;
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++) {
      countConsecutive++;

      if (i + 1 >= str.length || str[i] !== str[i + 1]) {
        compressedLength += 1 + countConsecutive.toString().length;
        countConsecutive = 0;
      }
    }
    return compressedLength;
  };

  const finalLength = countCompression(str);
  if (finalLength >= str.length) return str;

  let compressed = new Array(finalLength);
  let countConsecutive = 0;
  for (let i = 0; i < str.length; i++) {
    countConsecutive++;

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressed.push(str[i]);
      compressed.push(countConsecutive);
      countConsecutive = 0;
    }
  }

  return compressed.join('');
};
