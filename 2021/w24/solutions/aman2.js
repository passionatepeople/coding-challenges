const toNum = (str, r) => {
  let result = 0, num, ch
  for (let i = 0, len = str.length; i < len; i++) {
    ch = str.charCodeAt(i)
    num = (ch >= 97 && ch <= 122) ? 10 + ch - 97 : ch - 48
    if (num >= r) break
    result = result * r + num
  }
  return result
}

const findBase = (num1, num2, product) => {
  let i = 2, first, second, prod

  for (; ;) {
    if ((first = toNum(num1, i), first > 0)
      && (second = toNum(num2, i), second > 0)
      && (prod = toNum(product, i), prod > 0)
      && (first * second === prod)) {
      break
    }
    ++i
  }

  return i
}

module.exports = findBase

