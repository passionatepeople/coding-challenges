module.exports = (row) => {
  const newRow = row.filter((value) => value !== 0);

  for (let i = 1; i < newRow.length; i++) {
    if (newRow[i] === newRow[i - 1]) {
      newRow[i - 1] *= 2;
      newRow.splice(i, 1);
    }
  }

  while (newRow.length < row.length) {
    newRow.push(0);
  }

  return newRow;
};