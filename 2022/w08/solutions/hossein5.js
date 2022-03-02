const supermarket = (arr, tills) => {
  let length = arr.length,
    i,
    item,
    min = arr[0],
    max = min,
    minIndex,
    lines = [min],
    index = 1;

  // 1st special case: only one line
  if (tills == 1) {
    for (i = 1; i < length; i++) max += arr[i];
    return max;
  }

  // 2nd special case: number of lines > number of customers
  if (tills >= length) {
    for (i = 1; i < length; i++)
      if (arr[i] > max) {
        max = arr[i];
      }

    return max;
  }

  for (; index < tills; ++index) lines[index] = arr[index];
  for (; index < length; ++index) {
    min = lines[0];
    minIndex = 0;
    // find next line
    for (i = 1; i < tills; ++i) {
      item = lines[i];
      if (item < min) {
        min = item;
        minIndex = i;
      }
    }
    lines[minIndex] += arr[index];
  }

  // find max in lines
  max = lines[0];
  for (i = 1; i < tills; ++i)
    if (lines[i] > max) {
      max = lines[i];
    }
  return max;
};

module.exports = supermarket;
