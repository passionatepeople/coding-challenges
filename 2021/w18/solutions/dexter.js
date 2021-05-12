const numbers = [
  0, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
]
numbers[30] = 'thirty'
numbers[40] = 'forty'
numbers[50] = 'fifty'
numbers[60] = 'sixty'
numbers[70] = 'seventy'
numbers[80] = 'eighty'
numbers[90] = 'ninety'

module.exports = (input,check,result='',large='') => {
  if (input > 9000) {
    return "it's over nine thousand!"
    // return "it's over nine thousand!"
  } else if (!input) {
    return 'zero'
  } else {
    // your solution here
    if (numbers[check = input % 100]) {
      result = numbers[check]
      input -= check
    }
    if (numbers[check = input % 10]) {
      result = `${numbers[check]} ${result}`
      input -= check
    }
    if (numbers[check = input % 100]) {
      result = `${numbers[check]} ${result}`
      input -= check
    }
    if (numbers[check = Math.floor((input % 1000) / 100)]) {
      large = `${numbers[check]} hundred `
      input -= check * 100
    }
    if (numbers[check = Math.floor((input % 10000) / 1000)]) {
      large = `${numbers[check]} thousand ${large}`
      input -= check * 1000
    }

    if (large.length && result.length) {
      large += 'and '
    }
  }

  return (large + result).trim()
};
