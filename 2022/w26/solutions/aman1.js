const checkSum = (num, tmp) => {
  let sum = 0
  for (;tmp;)
    sum = (sum * 10) + (tmp % 10), tmp = (tmp / 10) << 0
  return sum == num
}

module.exports = number => {
  let first, last

  if (number < 10) return true

  if (number < 1e2)
    return number == 11 || number == 22 || number == 33 || number == 44 || number == 55 || number == 66 || number ==  77 || number == 88 || number == 99
  
  if (number < 1e3) {
    first = (number / 1E2) << 0, last = number % 10
    return first == last
  }

  if (number < 1e4) {
    first = (number / 1e3) << 0, last = number % 10
    return first == last ? checkSum(number, number) : false
  }
  
  if (number < 1e5) {
    first = (number / 1e4) << 0, last = number % 10
    return last == first ? checkSum(number, number) : false
  }

  first = (number / 1e5) << 0, last = number % 10
  return last == first ? checkSum(number, number) : false
}