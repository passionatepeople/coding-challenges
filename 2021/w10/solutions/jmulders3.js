const SET_SIZE = 256;

function insert(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (item < arr[i]) {
      arr.splice(i, 0, item);
      return;
    }
  }

  arr.push(item);
}

function sort(arr, s = 0) {
  if (arr.length < 2) {
    return arr;
  }

  const l = [];
  const r = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > s) {
      insert(r, arr[i]);
      continue;
    }

    l.push(arr[i]);
  }

  return sort(l, s - SET_SIZE).concat(r);
}

module.exports = function (input) {
  const result = [];
  const indexMap = {};
  const str = input.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (indexMap[str[i]] >= 0) {
      result[indexMap[str[i]]] -= SET_SIZE;
      continue;
    }

    indexMap[str[i]] = result.length;
    result.push(str.charCodeAt(i));
  }

  return sort(result).map((c) =>
    String.fromCharCode(c > 0 ? c : (c % SET_SIZE) + SET_SIZE)
  );
};