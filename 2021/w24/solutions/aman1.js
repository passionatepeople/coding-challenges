const myParseInt = (str, r) => {
  let result = 0, num, ch

  for (let i = 0, len = str.length; i < len; i++) {
    ch = str.charAt(i)
    num = (ch >= 'a' && ch <= 'z') ? 10 + ch.charCodeAt(0) - 97 : +ch

    if (num >= r) break

    result = result * r + num
  }

  return result
}

module.exports = (num1, num2, product) => {
  let i = 2, first, second, value, prod

  for (; ; i++) {
    first = myParseInt(num1, i)
    if (first <= 0) continue

    second = myParseInt(num2, i)
    if (second <= 0) continue

    prod = myParseInt(product, i)
    if (prod <= 0) continue

    value = first * second

    if (value === prod)
      break
  }

  return i
}
