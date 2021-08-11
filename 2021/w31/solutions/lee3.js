function thatsEnough(list, limit) {
  if (limit === 1) {
    return [...new Set(list)];
  }
  const counts = new Map();
  const length = list.length;
  for (let i = 0; i < length; i++) {
    counts.set(list[i], (counts.get(list[i]) || 0) + 1);
  }

  const toReturn = list.slice(0);
  for (let entry of counts) {
    for (; entry[1] > limit; entry[1]--) {
      toReturn.splice(toReturn.lastIndexOf(entry[0]), 1);
    }
  }

  return toReturn;
}

module.exports = thatsEnough;