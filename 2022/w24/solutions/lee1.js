const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const eqSet = (bs) => {
  for (const c of a) {
    if (!bs.has(c)) {
      return false;
    }
  }
  return true;
};

const validSudoku = (b) => {
  // your solution here
  if (
    !eqSet(new Set(b[0])) ||
    !eqSet(new Set(b[1])) ||
    !eqSet(new Set(b[2])) ||
    !eqSet(new Set(b[3])) ||
    !eqSet(new Set(b[4])) ||
    !eqSet(new Set(b[5])) ||
    !eqSet(new Set(b[6])) ||
    !eqSet(new Set(b[7])) ||
    !eqSet(new Set(b[8])) ||
    !eqSet(
      new Set([
        b[0][2],
        b[1][2],
        b[2][2],
        b[3][2],
        b[4][2],
        b[5][2],
        b[6][2],
        b[7][2],
        b[8][2],
      ])
    )
  ) {
    return false;
  }
  return true;
};

module.exports = validSudoku;