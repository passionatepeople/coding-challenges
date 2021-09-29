const evaporate = (number) => {
  let count = 0, n = number, total = 1

  while (n > 9) {
    while (number > 0) {
      digit = number % 10
      number = Math.floor(number / 10)
      total *= digit

      if (total === 0) break
    }

    count++

    number = n = total
    total = 1
  }

  return count
};

module.exports = evaporate
