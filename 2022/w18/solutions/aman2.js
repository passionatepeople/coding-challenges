module.exports = number => {
  let total = number % 10
  number = (number / 10)<<0

  for (; number; number = (number / 10)<<0)
    total += number % 10

  return total
}