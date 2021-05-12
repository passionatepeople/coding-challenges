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
  const string = String(input);
  let max = string.length;
  let i = max;

  for (const char of string) {
      i -= 1;

      if (char === '0') {
          continue;
      }

      if (output) {
          output += ' ';
      }

      if (i > 1) {
          output += digits[char] + ' ' + big[i];
      }

      if (i === 1) {
          const last = string[max - 1];

          if (output.length) {
              output += 'and ';
          }

          if (char === '1') {
              output += tenplus[last];
          } else {
              output += tens[char];

              if (last !== '0') {
                  output += ' ' + digits[last];
              }
          }
          break;
      }

      if (i === 0) {
          if (output.length) {
              output += 'and ';
          }

          output += digits[char];
      }
  }

  return output;
};

module.exports = getSaiyanLevel;
