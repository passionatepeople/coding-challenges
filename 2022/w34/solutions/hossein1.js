const amIHollow = (numbers) => {
  const length = numbers.length,
    half = ~~(length / 2);
  let leftIndex = half - 1 + (length % 2),
    rightIndex = half,
    zeroCount = leftIndex == rightIndex ? 1 : 2,
    lNumber = numbers[leftIndex],
    rNumber = numbers[rightIndex];

  if (lNumber || rNumber) return false;

  while (leftIndex) {
    lNumber = numbers[--leftIndex];
    rNumber = numbers[++rightIndex];

    if (lNumber && rNumber) continue;
    if (!lNumber && !rNumber) {
      zeroCount += 2;
      continue;
    }
    return false;
  }

  return zeroCount > 2;
};

module.exports = amIHollow;