const thatsEnough = (list, limit) => {
  var answer = [],
    map = new Map(),
    length = list.length;

  for (var i = 0; i < length; ++i) {
    var item = list[i];
    var cnt = map.get(item) || 0;

    if (cnt < limit) {
      answer.push(list[i]);
      map.set(item, cnt + 1);
    }
  }
  
  return answer;
};

module.exports = thatsEnough;
