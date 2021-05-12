const getSaiyanLevel = (input) => {
  if (input > 9000) {
    return "it\'s over nine thousand!";
  }

  if (input === 0) {
    return 'zero';
  }

  const singles = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const tens = [,, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const getTens = (number) => {
    if (number < 20) {
      return singles[number];
    }

    return tens[~~(number / 10)] + ' ' + singles[number % 10];
  }

  const thousands = ~~(input / 1000);
  const hundreds = ~~(input % 1000 / 100);
  const tenz = ~~(input % 100);

  return ((thousands > 0 ? singles[thousands] + ' thousand' : '') +
  (hundreds > 0 ? ' ' + singles[hundreds] + ' hundred' : '') +
    ((tenz > 0 && (thousands > 0 || hundreds > 0)) ? ' and ' : '') +
    (tenz > 0 ? getTens(tenz) : '')).trim();
};

module.exports = getSaiyanLevel;
