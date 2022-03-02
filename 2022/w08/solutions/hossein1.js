const supermarket = (arr, tills) => {
  let length = arr.length;
  let total = 0;

  // 1st special case: only one line
  if (tills == 1) {
    for (let i = 0; i < length; i++) {
      total += arr[i];
    }
    return total;
  }
  // 2nd special case: number of lines > number of customers
  if (tills >= length) {
    for (let i = 0; i < length; i++) {
      if (arr[i] > total) {
        total = arr[i];
      }
    }
    return total;
  }

  let min = arr[0];
  let index = 1;
  const lines = [min];

  // fill the lines array until all are filled
  for (let i = 1; i < tills; ++i) {
    let duration = arr[i];
    lines[i] = duration;
    index += 1;

    if (duration < min) {
      min = duration;
    }
  }

  // remove least duration from line and fill with next
  while (index < length) {
    const prevMin = min;
    total += prevMin;

    for (let i = 0; i < tills; ++i) {
      lines[i] -= prevMin;

      let duration = arr[index];
      let line = lines[i];

      if (line == 0 && index < length) {
        lines[i] = arr[index];
        index += 1;
        line = duration;
      }

      if (i == 0) {
        min = line;
      } else if (line < min) {
        min = line;
      }
    }
  }

  return total + Math.max(...lines);
};

module.exports = supermarket;
