const thatsEnough = (list, limit) => {
  const result = [], occ = new Map();

  for (let i = 0, l = list.length; i < l; i++) {
    const el = list[i], occEl = (occ.get(el) ?? 0) + 1;
    occ.set(el, occEl);

    occEl <= limit && result.push(el);
  }

  return result;
};

module.exports = thatsEnough;
