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
    const space = hundred ? ' ' : ''
    result += space + getNumberText(rest)
  }

  return result;
}

const getTens = number => {
  let tens = ~~(number / 10);
  let rest = number - tens * 10;

  if (rest) {
    return `${map[tens*10]}-${map[rest]}`
  }

  return `${map[tens*10]}`
}

const getNumberText = (number) => {
  if (!map[number]) {
    return getTens(number)
  }

  return map[number]
}

// const copied = require('../../w18/lars4.js') :)
const hundreds = Array.from({ length: 1000 }, (_, i) => getHundreds(i))

const spellItOut = (number) => {
  let value = number
  let result = ''

  if (number < 0) {
    result = 'minus '
    value = number * -1
  }
  
  if (value > 999) {
    const thousandDigits = ~~(value / 1000)
    value = value % 1000

    const space = value ? ' ' : ''
    result += hundreds[thousandDigits] + ' thousand' + space
  }

  if (value) {
    result += hundreds[value]
  }

  return result;
};

module.exports = spellItOut;
