const findMinInt = n => {
  let smallest = Infinity;
  let i = n.length - 1
  for (; i >= 0; i--) {
    let v = n[i];
    if (Number.isInteger(v) && v < smallest) {
      smallest = v
    }
  }

  return smallest
}

module.exports = findMinInt;
