const thatsEnough = (list, limit) => {
  const result = [];
  const map = new Map();

  for (let i = 0; i < list.length; i++) {
    const val = list[i];
    let current = map.get(val) ?? 0;
    if (current < limit) {
      result.push(val);
      map.set(val, current + 1);
    }
  }

  return result;
};

module.exports = thatsEnough;