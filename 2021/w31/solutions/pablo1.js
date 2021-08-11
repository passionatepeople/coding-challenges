const thatsEnough = (list, limit) => {
  const numbers = {}, result = [];
  let offset = 0, i = 0, l = list.length;

  while (i < l) {
    const el = list[i], nEl = numbers[el];

    if (!nEl) {
      result[offset] = el;
      offset++;
      numbers[el] = 1;
    } else if (nEl < limit) {
      result[offset] = el;
      offset++;
      numbers[el]++;
    }

    i++;
  }

  return result;
};

module.exports = thatsEnough;
