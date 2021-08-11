var push = Array.prototype.push;
const thatsEnough = (list, limit) => {
  var sol = [],
    map = {},
    i = 0,
    il = list.length;

  for (; i < il; ++i) {
    var item = list[i];
    if (!map[item]) {
      map[item] = 1;
      push.call(sol, item);
    } else if (map[item] < limit) {
      map[item] += 1;
      push.call(sol, item);
    }
  }

  return sol;
};

module.exports = thatsEnough;
