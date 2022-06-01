module.exports = (numbers) => {
  let result1 = numbers[0] % 2 == 0,
      result2 = numbers[1] % 2 == 0,
      result3 = numbers[2] % 2 == 0,
      i = 0,
      n,
      len = numbers.length,
      isEven = (result1 && result2) || (result1 && result3) || (result2 && result3)

  for (; i < len; i++) {
    n = numbers[i] % 2 == 0
    if (n === isEven) continue
    return numbers[i]
  }
}