const thatsEnough = (list, limit) => {
  const frequency = [];
  const length = list.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    const item = list[i];
    const freq = frequency[item] || 0;
    if (freq < limit) {
      frequency[item] = freq + 1;
      result.push(item);
    }
  }

  return result;
};

module.exports = thatsEnough;
