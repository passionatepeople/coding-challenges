const indexOf = Array.prototype.indexOf;
const ranking = (numbers) => {
  const result = new Array(),
    length = numbers.length;

  for (let i = 0; i < length; ++i) {
    const num = numbers[i],
      index = indexOf.call(numbers, num);

    if (index < i) {
      result[i] = result[index];
      continue;
    }

    let count = 1;
    for (let j = 0; j < length; ++j) {
      if (num < numbers[j]) count += 1;
    }
    result[i] = count;
  }

  return result;
};

module.exports = ranking;