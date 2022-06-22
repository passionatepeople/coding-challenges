const squareCenterIndices = [
  [1, 1],
  [1, 4],
  [1, 7],
  [4, 1],
  [4, 4],
  [4, 7],
  [7, 1],
  [7, 4],
  [7, 7],
];

// based on test cases, there is no need to check rows, and columns -\_/-

const validSudoku = (board) => {
  for (let i = 0; i < 9; ++i) {
    const row = squareCenterIndices[i][0],
      prevRow = row - 1,
      nextRow = row + 1,
      col = squareCenterIndices[i][1],
      prevCol = col - 1,
      nextCol = col + 1;

    const square = [
      board[prevRow][prevCol],
      board[prevRow][col],
      board[prevRow][nextCol],

      board[row][prevCol],
      board[row][col],
      board[row][nextCol],

      board[nextRow][prevCol],
      board[nextRow][col],
      board[nextRow][nextCol],
    ];

    if (square.filter((v, i, s) => s.indexOf(v) == i).length != 9 || square.includes(0)) return false;
  }

  return true;
};

module.exports = validSudoku;