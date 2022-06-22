const validSudoku = (board) => {
  for (let i = 0; i < 9; i += 3) {
    for (let k = 0; k < 9; k += 3) {
      let squareSum = 0;
      squareSum += board[i][k]
      squareSum += board[i+1][k]
      squareSum += board[i+2][k]

      squareSum += board[i][k+1]
      squareSum += board[i+1][k+1]
      squareSum += board[i+2][k+1]

      squareSum += board[i][k+2]
      squareSum += board[i+1][k+2]
      squareSum += board[i+2][k+2]

      if (squareSum !== 45) return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    const columnSum = board.map(x => x[i]).reduce((x,y) => x + y, 0)
    if (columnSum !== 45) return false;

    const rowSum = board[i].reduce((x,y) => x + y, 0);
    if (rowSum !== 45) return false;
  }

  return true;
};

module.exports = validSudoku;