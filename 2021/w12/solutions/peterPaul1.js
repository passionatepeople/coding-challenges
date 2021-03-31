/** Reverse the digits of a decimal number, e.g. 5080 -> 805 */
const reverseDigits = number => {
  let result = 0
  while (number > 0) {
    result = result * 10 + number % 10
    number = ~~(number / 10)
  }
  return result
}

/** Sum the digits of a decimal number, e.g. -5080 -> -13 */
const sumDigits = number => {
  let sign = number < 0 ? -1 : 1
  let result = 0
  number = sign * number
  while (number > 0) {
    result = result + number % 10
    number = ~~(number / 10)
  }
  return sign * result
}

/** Do something useless with a decimal number, as quickly as possible ^_^ */
const manipulateNumber = number => sumDigits(number - reverseDigits(number))

module.exports = manipulateNumber