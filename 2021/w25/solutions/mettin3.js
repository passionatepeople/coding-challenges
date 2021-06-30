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

module.exports = (number) => {
  let rest = Math.abs(number);
  let response = '';

  if (number < 0) {
    response = 'minus ';
  }

  if (rest < 1000) {
    response = response + w[rest];
  } else {
    if (rest > 1000) {
      response = response + w[Math.floor(rest / 1000)] + ' thousand';
      rest -= Math.floor(rest / 1000) * 1000;
    }

    if (rest > 100) {
      response = response + ' ' + w[Math.floor(rest / 100)] + ' hundred';
      rest -= Math.floor(rest / 100) * 100;
    }

    if (rest) {
      response = response + ' ' + w[rest];
    }
  }

  return response.trim();

};
