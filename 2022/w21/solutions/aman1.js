module.exports = (numbers) => {
  let num1 = numbers[0], result1 = num1 % 2 == 0,
  num2 = numbers[1], result2 = num2 % 2 == 0,
  num3 = numbers[2], result3 = num3 % 2 == 0,
  isEven = (result1 && result2) || (result1 && result3) || (result2 && result3)

  if (isEven && !result1) return num1
  if (!isEven && result1) return num1

  if (isEven && !result2) return num2
  if (!isEven && result2) return num2

  if (isEven && !result3) return num3
  if (!isEven && result3) return num3

  let i = 3, result, len = numbers.length
  
  for (; i < len; i++) {
    result = numbers[i] % 2 == 0
    if (isEven && !result) return numbers[i]
    if ( !isEven && result) return numbers[i]
  }
}