const digits = [
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
  'nineteen',
];
const tens = [
  'zero',
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
const big = ['zero', 'ten', 'hundred', 'thousand'];

const getSaiyanLevel = (input) => {
  // your solution here
  if (input > 9000) {
      return "it's over nine thousand!";
  }

  if (!input) {
      return 'zero';
  }

  let output = '';
  const low = input % 100;
  const l = low % 10;
  const d = (low / 10) | 0;
  const t = (input / 1000) | 0;
  const h = ((input / 100) | 0) % 10;

  if (t) {
      output += digits[t] + ' ' + big[3];
  }
  if (h) {
      if (output) {
          output += ' ';
      }

      output += digits[h] + ' ' + big[2];
  }

  if (output && low) {
      output += ' and ';
  }

  if (low && low < 20) {
      output += digits[low];
  }

  if (low >= 20) {
      output += tens[d];

      if (l) {
          output += ' ' + digits[l];
      }
  }

  return output;
};

module.exports = getSaiyanLevel;
