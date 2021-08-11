const thatsEnough = (list, limit) => {
  const charCountMap = new Map();

  let count;
  
  return list.filter((c) => {
    count = charCountMap.get(c) ?? 0;

    if(count < limit) {
      charCountMap.set(c, count + 1);

      return true;
    }

    return false;
  });
};

module.exports = thatsEnough;