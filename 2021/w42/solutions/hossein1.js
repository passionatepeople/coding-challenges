const add = (a, b) => {
  let i = a.length - 1,
    j = b.length - 1,
    k = (i > j ? i : j) + 1,
    curry = 0,
    result = [],
    partial = 0;

  for (; k > 0; --k) {
    if (i < 0) {
      partial = curry + +b[j--];
    } else if (j < 0) {
      partial = curry + +a[i--];
    } else {
      partial = curry + +a[i--] + +b[j--];
    }

    if (partial > 9) {
      result[k] = partial - 10;
      curry = 1;
    } else {
      result[k] = partial;
      curry = 0;
    }
  }

  result[0] = curry;
  return result.join("").replace(/^0+/, "");
};

module.exports = add;
