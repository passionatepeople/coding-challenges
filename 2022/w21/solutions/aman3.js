module.exports = numbers => {
  let result1 = numbers[0] & 1,
      result2 = numbers[1] & 1,
      result3 = numbers[2] & 1,
      isEven = (result1 && result2) || (result1 && result3) || (result2 && result3),
      i = 0, n,
      len = numbers.length

  for (; i < len; i++) {
    n = numbers[i] & 1
    if (n === isEven) continue
    return numbers[i]
  }
}