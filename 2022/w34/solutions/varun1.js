const amIHollow = (numbers) => {
  const len = numbers.length;
  if (len < 3) return false;
  if (len === 3) {
    return numbers[0] === 0 && numbers[1] === 0 && numbers[2] === 0;
  }

  let start = numbers.indexOf(0);
  if (start == -1 || (numbers[start + 1] !== 0 || numbers[start + 2] !== 0)) {
    return false;
  }
  let end = start + 2;
  while (numbers[end + 1] == 0) { end++ }

  if ((start) != (len - end - 1)) return false

  for (start = end + 1; start < len; start++) {
    if (numbers[start] == 0) return false
  }
  return true
};

module.exports = amIHollow;