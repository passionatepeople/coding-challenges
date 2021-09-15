const findMinInt = n => {
  let smallest = Infinity;
  let i = n.length - 1
  for (; i >= 0; i--) {
    if (Number.isInteger(n[i]) && n[i] < smallest) {
      smallest = n[i]
    }
  }

  return smallest
}

module.exports = findMinInt;
