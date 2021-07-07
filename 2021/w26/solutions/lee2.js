const w = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
];
w[30] = "thirty";
w[40] = "forty";
w[50] = "fifty";
w[60] = "sixty";
w[70] = "seventy";
w[80] = "eighty";
w[90] = "ninety";
w[100] = "hundred";

let i = 21;
while (i < 1000) {
  const hundreds = ~~(i / 100);
  const tens = ~~((i - hundreds * 100) / 10);
  const single = i - hundreds * 100 - tens * 10;

  if (i < 100) {
    w[i] = w[tens * 10];
    single > 0 && (w[i] += "-" + w[single]);
  }

  if (hundreds) {
    let leftOver = 0;
    w[i] = w[hundreds] + " hundred";
    leftOver = i - hundreds * 100;
    if (leftOver) {
      w[i] += " " + w[leftOver];
    }
  }

  i++;
}

const abs = Math.abs;
const spellItOut = (input) => {
  const isNegative = input < 0 ? "minus " : "";

  let _input = isNegative ? abs(input) : input;

  if (_input < 1000) {
    return isNegative + w[_input];
  }

  const _input2 = ~~(_input / 1000);
  const leftOver = _input - _input2 * 1000;

  if (leftOver) {
    return isNegative + w[_input2] + " thousand " + w[leftOver];
  }

  return isNegative + w[_input2] + " thousand";
};

module.exports = spellItOut;
