const leftSwipe2048row = (row) => {
  const length = row.length,
    result = new Array(length);

  let index = 0;
  for (let i = 0; i < length; ++i) {
    const current = row[i];
    if (current == 0) continue;

    while (row[++i] == 0);
    const next = row[i];

    if (current == next) {
      result[index++] = current + next;
    } else {
      result[index++] = current;
      i -= 1;
    }
  }

  for (; index < length; ++index) {
    result[index] = 0;
  }

  return result;
};

module.exports = leftSwipe2048row;