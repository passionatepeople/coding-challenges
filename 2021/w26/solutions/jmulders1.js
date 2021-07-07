const THOUSAND_LABEL = ' thousand';
const HUNDRED_LABEL = ' hundred';
const MINUS_LABEL = 'minus';
const DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

(() => {
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  for (let i = 0; i < tens.length; i++) {
    DIGITS.push(tens[i]);
    for (let j = 1; j < 10; j++) {
      DIGITS.push(tens[i] + '-' + DIGITS[j]);
    }
  }
})();

const convert = (n) => {
  if (n < 100) return DIGITS[n];

  let res = '';

  const hecto = ~~(n / 100);
  res += DIGITS[hecto] + HUNDRED_LABEL;
  n %= 100;

  return n > 0 ? res + ' ' + DIGITS[n] : res;
};

const spellItOut = (number) => {
  if(number === 0) return DIGITS[0];

  let res = number < 0 ? MINUS_LABEL : '';
  number = Math.abs(number);


  if (number > 999) {
    res += (res && ' ') + convert(~~(number / 1000)) + THOUSAND_LABEL;
    number %= 1000;
  }

  if (number > 99) {
    res += (res && ' ') + convert(~~(number / 100)) + HUNDRED_LABEL;
    number %= 100;
  }

  if (number > 0) {
    res += (res && ' ') + DIGITS[number];
  }

  return res;
};

module.exports = spellItOut;
