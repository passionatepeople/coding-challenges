const hasFive = num => {
  while (num) {
    if ( num % 10 == 5 ) {
      return true
    }
    num = (num / 10) << 0
  }
  return false
}

module.exports = (start, end) => {
  let count = 0, i = start

  for (; i <= end; i++) {
    if (hasFive(i))
      continue
    count++
  }

  return count
}