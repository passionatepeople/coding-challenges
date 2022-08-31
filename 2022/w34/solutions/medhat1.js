const amIHollow = (numbers) => {
  const len = numbers.length;
  if (len < 3) return false;

  const mid = Math.floor(len / 2);
  if (numbers[mid] !== 0) return false;

  let l = 0,
    r = len - 1;
  let countZeros = len % 2 === 0 ? 0 : 1;
  while (l < r) {
    if (numbers[l] === 0 || numbers[r] === 0) {
      if (numbers[l] !== numbers[r]) return false;
      else countZeros += 2;
    }
    l++;
    r--;
  }

  return countZeros >= 3;
};

module.exports = amIHollow;