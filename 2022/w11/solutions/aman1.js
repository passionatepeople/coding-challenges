module.exports = (arr) => {
  let len = arr.length

  if (len < 3) return 0

  let max = min = total = arr[0], i = 1, n

  for (; i < len; i++) {
    n = arr[i]
    total += n

    if (n > max) {
      max = n
      continue
    } 

    if (n < min) {
      min = n
      continue
    }
  }

  return total - max - min
}
