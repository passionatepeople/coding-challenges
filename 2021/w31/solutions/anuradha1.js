const thatsEnough = (list, limit=1) => {
  const obj = {};
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const curr = list[i];
    if (!obj[curr]) {
      obj[curr] = 1;
      result.push(curr);
    } else if (obj[curr] < limit) {
      obj[curr] = obj[curr]+1;
      result.push(curr);
    }
  }

  return result;
};

module.exports = thatsEnough;