const UNITS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];
const TENS = [
  ,
  ,
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
];

const getSaiyanLevel = (input) => {
  if (input > 9000) return "it's over nine thousand!";
  if (input < 20) return UNITS[input];

  const kilo = (input / 1000) | 0;
  let str = kilo ? UNITS[kilo] + ' thousand' : '';
  input %= 1000;

  const hecto = (input / 100) | 0;
  str += hecto ? (str && ' ') + UNITS[hecto] + ' hundred' : '';
  input %= 100;

  if (input && str) str += ' and';

  if (input > 19) {
    const deca = (input / 10) | 0;
    str += (str && ' ') + TENS[deca];
    input %= 10;
  }

  return str + (input ? (str && ' ') + UNITS[input] : '');
};

module.exports = getSaiyanLevel;