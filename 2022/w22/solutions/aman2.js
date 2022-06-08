const sqrtMap = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
const sqrtMul10 = [0, 10, 40, 90, 160, 250, 360, 490, 640, 810]
const sqrtMul100 = [0, 100, 400, 900, 1600, 2500, 3600, 4900, 6400, 8100]

module.exports = num => {
  let n, nn, x, xx, digits = new Array(3), value, i = 0

  if (num < 100) {
    n = num % 10
    num = (num / 10) << 0
    return n < 4 ? (sqrtMul10[num] + sqrtMap[n]) : (sqrtMul100[num] + sqrtMap[n])
  }

  if (num < 1000) {
    n = num % 10
    num = (num / 10) << 0
    x = n < 4 ? 10 : 100

    nn = num % 10
    num = (num / 10) << 0
    xx = nn < 4 ? sqrtMul10[num] : sqrtMul100[num]

    return ((xx + sqrtMap[nn]) * x) + sqrtMap[n]
  }
  
  while (1) {
    n = num % 10
    digits[i] = sqrtMap[n]
    num = (num / 10) << 0

    if (num < 1000) {
      n = num % 10
      num = (num / 10) << 0
      x = n < 4 ? 10 : 100

      nn = num % 10
      num = (num / 10) << 0
      xx = nn < 4 ? sqrtMul10[num] : sqrtMul100[num]

      value = ((xx + sqrtMap[nn]) * x) + sqrtMap[n]
      break
    }

    i++
  }

  for (; i >= 0; i--)
    value = (digits[i] < 16) ? (value * 10) + digits[i] : (value * 100) + digits[i]

  return value
}