const sqrtMap = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

const getSqrtNumbers = (num, xx = 0, xxx = 0, xxxx = 0, xxxxx = 0) => {
  if (xxxxx)
    xxxx = xxxx < 16 ? xxxxx * 10 + xxxx : xxxxx * 100 + xxxx

  if (xxxx)
    xxx = xxx < 16 ? xxxx * 10 + xxx : xxxx * 100 + xxx

  if (xxx)
    xx = xx < 16 ? xxx * 10 + xx : xxx * 100 + xx

  let n = num % 10, value
  num = (num / 10) << 0
  value = num < 4 ? xx * 10 + sqrtMap[num] : xx * 100 + sqrtMap[num]
  return n < 4 ? value * 10 + sqrtMap[n] : value * 100 + sqrtMap[n]
}

module.exports = num => {
  if (num < 1E2)
    return getSqrtNumbers(num)

  if (num < 1E3)
    return  getSqrtNumbers(num % 1E2, sqrtMap[(num / 1E2) << 0])

  if (num < 1E4)
    return  getSqrtNumbers(num % 1E2, sqrtMap[((num % 1E3) / 1E2) << 0], sqrtMap[(num / 1E3) << 0])

  if (num < 1E5)
    return  getSqrtNumbers(num % 1E2, sqrtMap[((num % 1E3) / 1E2) << 0], sqrtMap[((num % 1E4) / 1E3) << 0], sqrtMap[(num / 1E4) << 0])

  return  getSqrtNumbers(num % 1E2, sqrtMap[((num % 1E3) / 1E2) << 0], sqrtMap[((num % 1E4) / 1E3) << 0], sqrtMap[((num % 1E5) / 1E4) << 0], sqrtMap[(num / 1E5) << 0])
}