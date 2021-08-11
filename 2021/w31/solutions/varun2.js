const thatsEnough = (list, limit) => {
  const map = new Map();
  return list.filter(item => {
    const count = map.get(item) || 0
    map.set(item, count + 1)

    return count < limit
  })
};

module.exports = thatsEnough;
