var push = Array.prototype.push;
const thatsEnough = (list, limit) => {
  var sol = [],
    map = new Map(),
    i = 0,
    il = list.length;

  for (; i < il; ++i) {
    var item = list[i];
    var cnt = map.get(item);
    if (!cnt) {
      map.set(item, 1);
      push.call(sol, item);
    } else if (cnt < limit) {
      map.set(item, cnt + 1);
      push.call(sol, item);
    }
  }

  return sol;
};

module.exports = thatsEnough;
