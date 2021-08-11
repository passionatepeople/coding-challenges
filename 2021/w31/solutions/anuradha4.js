const splice = Array.prototype.splice;
function thatsEnough(list, limit) {
  const obj = {};
  const result = [...list];
  let i = 0;
  while (i < result.length) {
    const curr = result[i];
    const count = obj[curr] || 0;    
    if (count < limit) {
      obj[curr] = count + 1;
      i+=1;
    } else {
      splice.call(result, i, 1);
    }
  }
  return result;
};

module.exports = thatsEnough;