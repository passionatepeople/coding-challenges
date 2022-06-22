const validSudoku = (board) => {
  let r = 0;
  let c = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      r += board[i][j];
      c += board[j][i];
    }
    if (r !== 45 || c !== 45) return false
    r = 0; c = 0;
  }

  return true;
};

module.exports = validSudoku;