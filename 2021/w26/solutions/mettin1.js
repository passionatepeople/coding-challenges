// Pregenerate 1...999
const w = [
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
  'twenty',
];
w[30] = 'thirty';
w[40] = 'forty';
w[50] = 'fifty';
w[60] = 'sixty';
w[70] = 'seventy';
w[80] = 'eighty';
w[90] = 'ninety';
w[100] = 'hundred';

let i = 21;
while (i < 1000) {
  const hundreds = Math.floor(i / 100);
  const tens = Math.floor((i - hundreds * 100) / 10);
  const single = i - hundreds * 100 - tens * 10;

  let leftOver = 0;

  if (i < 100) {
    w[i] = w[tens * 10];
    single > 0 && (w[i] += '-' + w[single]);
  }

  if (hundreds) {
    w[i] = w[hundreds] + ' hundred';
    leftOver = i - hundreds * 100;
    if (leftOver) {
      w[i] += ' ' + w[leftOver];
    }
  }
  i++;
}

module.exports = spellItOut = (number) => {
  const input = Math.abs(number);
  const response = [];

  if (number < 0) {
    response.push('minus');
  }

  if (input < 1000) {
    response.push(w[input]);
  } else {
    let leftOver = input;
    if (leftOver > 1000) {
      const thousands = (input - (input % 1000)) / 1000;
      response.push(w[thousands]);
      response.push('thousand');
      leftOver -= thousands * 1000;
    }
    if (leftOver > 100) {
      const hundreds = (leftOver - (leftOver % 100)) / 100;
      response.push(w[hundreds]);
      response.push('hundred');
      leftOver -= hundreds * 100;
    }

    if (leftOver) {
      response.push(w[leftOver]);
    }
  }

  return response.join(' ');

};
