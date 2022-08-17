const frequency = new Array(9);

const popularityContest = (numbers) => {
  const result = new Array();
  let i = 10,
    length = numbers.length,
    num = -1;

  while (i--) {
    frequency[i] = 0;
  }
  while (length--) {
    frequency[numbers[length]] += 1;
  }

  i = 11;
  while (i > 0) {
    num = frequency.indexOf(i, num + 1);

    if (num < 0) {
      num = -1;
      i--;
      continue;
    }

    for (let j = i; j > 0; --j) {
      result.push(num);
    }
  }

  return result;
};

module.exports = popularityContest;