const getSaiyanLevel = (input) => {
  if (input > 9000) {
    return "it\'s over nine thousand!";
  }

  if (input === 0) {
    return 'zero';
  }

  const singles = [, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const tenNames = [,,'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const thousands = ~~(input / 1000);
  const hundreds = ~~(input % 1000 / 100);
  const tens = ~~(input % 100);

  let out = '';

  if (thousands) {
    out += singles[thousands];
    out += ' thousand';

    if (hundreds) {
      out += ' ';
    }
  }

  if (hundreds) {
    out += singles[hundreds];
    out += ' hundred';
  }

  if (tens === 0) {
    return out;
  }

  if (out !== '') {
    out += ' and ';
  }

  if (tens <= 20) {
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
