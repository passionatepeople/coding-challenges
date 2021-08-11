var push = Array.prototype.push;
const thatsEnough = (list, limit) => {
  var sol = [],
    map = new Map(),
    i = 0,
    il = list.length;

  for (; i < il; ++i) {
    var item = list[i];
    if (!map.has(item)) {
      map.set(item, 1);
      push.call(sol, item);
    } else if ((cnt = map.get(item)) < limit) {
      map.set(item, cnt + 1);
      push.call(sol, item);
    }
  }

  return sol;
};

module.exports = thatsEnough;
