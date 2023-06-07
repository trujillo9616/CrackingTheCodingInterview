//

// Solution #1: Keep track of rows and cols to zero out
// Time Complexity: O(n*m)
// Space Complexity: O(n*m)
export const zeroMatrix = (matrix: number[][]): number[][] => {
  if (matrix.length === 0) return matrix;
  const n = matrix.length;
  const m = matrix[0].length;

  const rows = new Array<boolean>(n).fill(false);
  const cols = new Array<boolean>(m).fill(false);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (rows[i]) {
      for (let j = 0; j < m; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 0; j < m; j++) {
    if (cols[j]) {
      for (let i = 0; i < n; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
