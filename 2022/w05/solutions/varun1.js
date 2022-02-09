const indexOf = Array.prototype.indexOf
const toLowerCase = String.prototype.toLowerCase

const imSpecial = (str) => {
  let i = 0;
  let len = str.length;
  let lStr = toLowerCase.call(str)
  const key = []
  const oKey = []
  const value = []

  for (; i < len; i++) {
    const strIndex = indexOf.call(key, lStr[i])
    if (strIndex !== -1) {
      value[strIndex]++
    } else {
      key.push(lStr[i])
      oKey.push(str[i])
      value.push(1)
    }
  }
  const idx = indexOf.call(value, 1)
  if (idx > -1) {
    return oKey[idx]
  }

  return ""
};

module.exports = imSpecial;
