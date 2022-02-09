const { toLowerCase } = String.prototype;

module.exports = (str) => {
  const count = str.length;
  const temp = Array(count);
  for (let i = 0; i < count; i++) {
    const curr = toLowerCase.call(str[i]);
    const lowerStr = toLowerCase.call(str);

    const index = lowerStr.indexOf(curr, i + 1);
    if (index > -1) {
      temp[index] = 0;
    } else {
      if (temp[i] !== 0) return str[i];
    }
  }
  return '';
};
