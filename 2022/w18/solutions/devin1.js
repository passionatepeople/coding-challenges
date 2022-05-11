const toString = Number.prototype.toString;
const allTogether = (number) => {
  let total = 0;
  const numberStr = toString.call(number);
  const numberLen = numberStr.length;
  for (let i = 0; i < numberLen; i++) {
    total += +numberStr[i];
  }
  return total;
};
module.exports = allTogether;