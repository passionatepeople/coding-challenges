const thatsEnough = (list, limit) => {
  if (limit === 1) {
    return [...new Set(list)];
  }
  let toReturn = [];
  let hash = {};
  for (let i = 0; i < list.length; i++) {
    hash[list[i]] = !!hash[list[i]] ? hash[list[i]] + 1 : 1;
    if (hash[list[i]] <= limit) {
      toReturn.push(list[i]);
    }
  }

  return toReturn;
};

module.exports = thatsEnough;
