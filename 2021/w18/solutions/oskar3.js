const getSaiyanLevel = (input) => {
  if (input > 9000) {
    return "it\'s over nine thousand!";
  }

  if (input === 0) {
    return 'zero';
  }

  const singles = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const tenNames = [,, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const thousands = ~~(input / 1000);
  const hundreds = ~~(input % 1000 / 100);
  const tens = ~~(input % 100);

  let out = '';
  out += thousands > 0 ? singles[thousands] + ' thousand' : '';
  out += thousands && hundreds ? ' ' : '';
  out += hundreds > 0 ? singles[hundreds] + ' hundred' : '';

  if (tens === 0) {
    return out;
  }

  out += (thousands > 0 || hundreds > 0) ? ' and ' : '';

  if (tens < 20) {
    out += singles[tens];

    return out;
  }

  out += tenNames[~~(tens / 10)];

  const rest = tens % 10;

  if (!rest) {
    return out;
  }

  out += ' ';
  out += singles[rest];

  return out;
};

module.exports = getSaiyanLevel;
