module.exports = (input) => {
  const str = input.toLowerCase();
  const map = {};
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] >= 0) {
      result[map[str[i]]].push(str[i]);
      continue;
    }

    map[str[i]] = result.length;
    result.push([str[i]]);
  }

  return result
    .sort(
      (a, b) => b.length - a.length || a[0].charCodeAt(0) - b[0].charCodeAt(0)
    )
    .map((a) => a[0]);
};