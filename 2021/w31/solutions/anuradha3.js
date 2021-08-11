const push = Array.prototype.push;
function thatsEnough(list, limit) {
  const obj = {};
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const curr = list[i];
    const count = obj[curr] || 0;    
    if (count < limit) {
      obj[curr] = count + 1;
      push.call(result, curr);
    }
  }

  return result;
};

module.exports = thatsEnough;
