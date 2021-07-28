module.exports = (string, n = 2, s = '_') => {
  const output = [];
  const limit = string.length;
  let i = 0;
  while (i < limit) {
    const substr = string.substr(i, n);
    if (substr.length !== n) {
      output.push(substr.padEnd(n, s));
    } else {
      output.push(substr);
    }
    i += n;
  }
  return output;
}
