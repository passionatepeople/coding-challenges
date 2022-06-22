const validSudoku = (board) => {
  for (let group = 0; group < 9; group++) {
    let rowSum = 0;
    let colSum = 0;
    let boxSum = 0;
    let boxX = group % 3;
    let boxY = ~~(group / 3);
    for (let index = 0;index < 9; index++) {
      rowSum += board[group][index];
      colSum += board[index][group];
      let slotX = index % 3;
      let slotY = ~~(index/3);
      let celX = boxX * 3 + slotX;
      let celY = boxY * 3 + slotY;
      boxSum += board[celX][celY];
    }
    if (rowSum !== 45) {
      return false;
    }
    if (colSum !== 45) {
      return false;
    }
    if (boxSum !== 45) {
      return false;
    }
  }
  return true;
};
module.exports = validSudoku;