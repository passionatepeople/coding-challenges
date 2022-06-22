const eqSet = (arr2) => {
  let frequencyCounter = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  for (let i = 0; i < arr2.length; i++) {
    frequencyCounter[arr2[i]] = frequencyCounter[arr2[i]] + 1;
  }
  for (let i = 1; i < 10; i++) {
    if (frequencyCounter[i] !== 1) return false;
  }
  return true;
};

const validSudoku = (b) => {
  if (
    !eqSet(b[0]) ||
    !eqSet(b[1]) ||
    !eqSet(b[2]) ||
    !eqSet(b[3]) ||
    !eqSet(b[4]) ||
    !eqSet(b[5]) ||
    !eqSet(b[6]) ||
    !eqSet(b[7]) ||
    !eqSet(b[8]) ||
    !eqSet([
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
  ) {
    return false;
  }
  return true;
};

module.exports = validSudoku;