const findMinInt = n => {
  let smallest = Infinity;
  let length = n.length;
  let i = 0
  let v;
  for (; i <= length / 2; i++) {
    v = n[i];
    if (Number.isInteger(v) && v < smallest) {
      smallest = v
    }
    v = n[length - i];
    if (Number.isInteger(v) && v < smallest) {
      smallest = v
    }
  }

  return smallest
}

module.exports = findMinInt;
