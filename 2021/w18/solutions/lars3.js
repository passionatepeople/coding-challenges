const map = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

const getHundreds = number => {
  let hundred = ~~(number / 100)
  let rest = number - hundred * 100;

  let result = '';

  if (hundred) {
    result += getNumberText(hundred) + ' hundred'
  }

  if (rest) {
    let and = hundred ? ' and ' : ''
    result += and + getNumberText(rest)
  }

  return result;
}

const getTens = number => {
  let tens = ~~(number / 10);
  let rest = number - tens * 10;

  if (rest) {
    return `${map[tens*10]} ${map[rest]}`
  }

  return `${map[tens*10]}`
}

const getNumberText = (number) => {
  if (!map[number]) {
    return getTens(number)
  }

  return map[number]
}

const hundreds = Array.from({ length: 999 }, (_, i) => getHundreds(i + 1))
const thousands = Array.from({ length: 9 }, (_, i) => `${map[i + 1]} thousand`)

const OVER = 'it\'s over nine thousand!'
const ZERO = 'zero'

const getSaiyanLevel = (number) => {
  if (number === 0) {
    return ZERO
  }

  if (number < 1000) {
    return hundreds[number - 1]
  }

  if (number > 9000) {
    return OVER;
  }

  let result = '';

  const thousandDigit = ~~(number / 1000)
  const rest = number % 1000

  if (thousandDigit) {
    result += thousands[thousandDigit - 1]
  }

  if (rest) {
    const prefix = rest > 99 ? ' ' : ' and ';
    result += `${prefix}${hundreds[rest - 1]}`
  }

  return result
};

module.exports = getSaiyanLevel;
