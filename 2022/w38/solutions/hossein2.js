const leftSwipe2048row = (row) => {
  const length = row.length,
    result = new Array(length);
  let index = 0,
    current = row[0];
  for (let i = 1; i < length; ++i) {
    if (current == 0) {
      current = row[i];
      continue;
    }
    const next = row[i];
    if (next == 0) continue;
    if (current == next) {
      result[index++] = current + next;
      current = 0;
    } else {
      result[index++] = current;
      current = next;
    }
  }
  result[index++] = current;
  for (; index < length; ++index) {
    result[index] = 0;
  }
  return result;
};
module.exports = leftSwipe2048row;