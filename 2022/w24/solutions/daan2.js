const validSudoku = (board) => {
  for(let i = 0; i < 9; i++){
    let rowCount = 0, colCount = 0;
    for(let j = 0; j < 9; j++){
      rowCount += board[i][j];
      colCount += board[j][i];
    }
    if(rowCount !== 45 || colCount !== 45) {
      return false;
    }
  }
  return true;
};

module.exports = validSudoku;