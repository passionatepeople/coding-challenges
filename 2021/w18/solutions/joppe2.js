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
];
const tenplus = [
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
  let n = input;
  let i = 0;
  let previous = 0;

  while (n != 0) {
      const part = n % 10;

      if (part > 0) {
          if (i === 0) {
              output = digits[part] + output;
          } else {
              if (output) {
                  output = ' ' + output;
              }

              if (i === 1) {
                  if (part === 1) {
                      output = tenplus[previous];
                  } else {
                      output = tens[part] + output;
                  }
              } else {
                  output = digits[part] + ' ' + big[i] + output;
              }
          }
      }

      if (i === 1 && output && input > 100) {
          output = 'and ' + output;
      }

      previous = part;
      n = (n / 10) | 0;
      i += 1;
  }

  return output;
};

module.exports = getSaiyanLevel;
