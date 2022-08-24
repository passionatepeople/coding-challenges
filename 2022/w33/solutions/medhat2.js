const sevenAteNine = (numbers) => {
  const len = numbers.length - 1;
  let res = numbers[0];

  for (let i = 1; i < len; i++) {
    const n = numbers[i];

    if (n === '9' && numbers[i - 1] === '7' && numbers[i + 1] === '7') {
      if (i === len - 1) {
        res += 7;
        return res;
      }
      res += 7;
      i++;
      continue;
    }

    res += n;
  }

  return res + numbers[len];
};

module.exports = sevenAteNine;