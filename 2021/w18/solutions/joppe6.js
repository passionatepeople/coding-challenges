const digits = [
  '',
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
  'nineteen',
];
const tens = [
  '',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

const transformLow = (input) => {
  let output = '';
  const l = input % 10;
  const d = (input / 10) | 0;

  if (input && input < 20) {
      output = digits[input];
  }

  if (input >= 20) {
      output = tens[d];

      if (l) {
          output += ' ' + digits[l];
      }
  }

  return output;
};

const transformHigh = (input) => {
  let output = '';
  const h = input % 10;
  const t = (input / 10) | 0;

  if (t) {
      output = digits[t] + ' thousand';
  }

  if (h) {
      if (output) {
          output += ' ';
      }

      output += digits[h] + ' hundred';
  }

  return output;
};

const low = Array.from({ length: 100 }, (_, i) => transformLow(i));
const high = Array.from({ length: 100 }, (_, i) => transformHigh(i));

const getSaiyanLevel = (input) => {
  // your solution here
  if (input > 9000) {
      return "it's over nine thousand!";
  }

  if (!input) {
      return 'zero';
  }

  const h = (input / 100) | 0;
  const l = input % 100;
  const p = l && h ? ' and ' : '';

  return high[h] + p + low[l];
};

module.exports = getSaiyanLevel;
