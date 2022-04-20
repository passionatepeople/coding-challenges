var result = new Array(22),
  slice = Array.prototype.slice,
  join = Array.prototype.join;

const simplify = (arr) => {
  var length = arr.length + 1,
    lastNumber = arr[0],
    diff = (i = 1),
    index = 0;

  for (; i < length; ++i) {
    let num = arr[i];
    if (num - lastNumber == diff) {
      diff += 1;
    } else {
      if (diff > 2) {
        result[index++] = lastNumber + "-" + arr[i - 1];
      } else if (diff == 2) {
        result[index++] = lastNumber;
        result[index++] = arr[i - 1];
      } else {
        result[index++] = lastNumber;
      }
      lastNumber = num;
      diff = 1;
    }
  }

  return join.call(slice.call(result, 0, index));
};

module.exports = simplify;