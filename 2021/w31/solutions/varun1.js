const thatsEnough = (list, limit) => {
  const result = []

  const counter = new Map();
  list.forEach(item => {
    const count = counter.get(item);

    if(!count || count < limit){
      counter.set(item, count?count+1:1);
      result.push(item)
    }
  })

  return result;
};

module.exports = thatsEnough;
