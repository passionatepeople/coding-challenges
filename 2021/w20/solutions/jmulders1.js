const insert = (r, c, asc) => {
  for (let i = 0; i < r.length; i++) {
    if (asc ? r[i] > c : r[i] < c) {
      r.splice(i, 0, c);

      return r;
    }
  }

  r.push(c);

  return r;
};

const mergeArrays = (arr1, arr2, direction) => {
  const result = [];

  const reducer = (r, c) => insert(r, c, direction === 'asc');

  arr1.reduce(reducer, result);
  arr2.reduce(reducer, result);

  return result;
};

module.exports = mergeArrays;
