const thatsEnough = (list, limit) => {
  const frequencyKeys = [];
  const frequencyValues = [];
  const length = list.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    const item = list[i];
    const freqIdx = frequencyKeys.indexOf(item);
    if (freqIdx === -1) {
      frequencyKeys.push(item);
      frequencyValues.push(1);
      result.push(item);
    } else {
      const freq = frequencyValues[freqIdx];
      if (freq < limit) {
        frequencyValues[freqIdx] = freq + 1;
        result.push(item);
      }
    }
  }

  return result;
};

module.exports = thatsEnough;
