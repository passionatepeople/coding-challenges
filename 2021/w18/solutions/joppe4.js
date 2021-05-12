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

const transform = (input) => {
  let output = '';
  const low = input % 100;
  const l = low % 10;
  const d = (low / 10) | 0;
  const h = ((input / 100) | 0) % 10;
  let shouldHaveAnd = low > 0;

  if (h) {
      output += digits[h] + ' ' + big[2];
  }

  if (output && low) {
      output += ' and ';
      shouldHaveAnd = false;
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

  return {
      output,
      shouldHaveAnd,
  };
};

const belowThousand = Array.from({ length: 999 }, (_, i) => transform(i + 1));

const getSaiyanLevel = (input) => {
  // your solution here
  if (input > 9000) {
      return "it's over nine thousand!";
  }

  if (!input) {
      return 'zero';
  }

  const t = (input / 1000) | 0;
  const low = input % 1000;
  const result = low
      ? belowThousand[low - 1]
      : { output: '', shouldHaveAnd: false };
  let output = result.output;

  if (t) {
      if (result.shouldHaveAnd) {
          output = ' and ' + output;
      } else if (output) {
          output = ' ' + output;
      }

      output = digits[t] + ' ' + big[3] + output;
  }

  return output;
};

module.exports = getSaiyanLevel;
