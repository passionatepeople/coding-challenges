module.exports = function (input) {
  const SET_SIZE = 256;
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

  return result
    .sort((a, b) => a - b)
    .map((c) => String.fromCharCode(c > 0 ? c : (c % SET_SIZE) + SET_SIZE));
};