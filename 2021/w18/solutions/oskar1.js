const singles = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const tens = [,, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const getTens = (number) => {
  const tental = number.charAt(0);
  const single = number.charAt(1);
  if (tental === '0') {
    return singles[single];
  }

  if (tental === '1') {
    return singles[number];
  }

  return tens[tental] + ' ' + singles[single];
}

const padNumber = (number) => {
  const num = number.toString();

  switch (num.length) {
    case 1:
      return '000' + num;
    case 2:
      return '00' + num;
    case 3:
      return '0' + num;
    case 4:
      return num;
  }
}

const getSaiyanLevel = (input) => {
  if (input > 9000) {
    return "it\'s over nine thousand!";
  }

  //make 4 characters
  const fourInput = padNumber(input)

  if (fourInput === '0000') {
    return 'zero';
  }

  let output = '';

  const t = fourInput.charAt(0);
  const h = fourInput.charAt(1);
  const te = fourInput.substr(2, 2);

  if (t !== '0') {
    output += singles[t] + ' thousand';
  }
  if (h !== '0') {
    output += ' ' + singles[h] + ' hundred';
  }
  if (te !== '00') {
    output += ((t !== '0' || h !== '0') ? ' and ' : ' ') + getTens(te);
  }

  return output.trim();
};

module.exports = getSaiyanLevel;
