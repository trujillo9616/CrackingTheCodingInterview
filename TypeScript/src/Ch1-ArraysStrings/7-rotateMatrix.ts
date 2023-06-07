// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// place?

// Solution #1: Layer by Layer
// Time Complexity: O(n^2)
// Space Complexity: O(1)
export const rotateMatrix = (matrix: number[][]): number[][] | boolean => {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;

  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];
      // top -> right
      matrix[i][last] = top;
    }
  }

  return matrix;
};
