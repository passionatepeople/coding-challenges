const thatsEnough = (list, limit) => {
  let seen = new Map();
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let cc = seen.get(list[i]) || 0;
    if (cc < limit) {
      seen.set(list[i], cc + 1);
      result.push(list[i]);
    }
  }
  return result;
};

module.exports = thatsEnough;
