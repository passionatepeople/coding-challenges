module.exports = number => {
  let total = 0
  for (; number; number = ~~(number / 10))
    total += number % 10

  return total
}