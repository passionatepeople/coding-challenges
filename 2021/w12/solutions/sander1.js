const reverse = (n) => {
  let result = 0

  while (n > 0) {
    result = result * 10 + n % 10
    n = n/10|0
  }

  return result
}

const sum = (n) => {
  let total = 0

  while (n) {
    total += n % 10
    n = ~~(n / 10)
  }

  return total
}

const manipulateNumber = (number) => {
  const substracted = number - reverse(number)
  return sum(Math.abs(substracted)) * (substracted < 0 ? -1 : 1)
}

module.exports = manipulateNumber
