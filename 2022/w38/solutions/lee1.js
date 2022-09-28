const leftSwipe2048row = (row) => {
  let res = new Array(row.length).fill(0);
  let nextFillableIndex = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] === 0) {
      continue;
    }

    if (res[nextFillableIndex] === 0) {
      res[nextFillableIndex] = row[i];
      continue;
    }

    if (res[nextFillableIndex] === row[i]) {
      res[nextFillableIndex] *= 2;
      nextFillableIndex++;
      continue;
    }

    if (res[nextFillableIndex] !== row[i]) {
      nextFillableIndex++;
      res[nextFillableIndex] = row[i];
      continue;
    }
  }
  return res;
};

module.exports = leftSwipe2048row;