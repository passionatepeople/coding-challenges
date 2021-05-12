// Pregenerate 1...999
const thousand = 1000;
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

let i = 20;
while (i < thousand) {
  i++;
  const hundreds = Math.floor(i / 100);
  const tens = Math.floor((i - hundreds * 100) / 10);
  const single = i - hundreds * 100 - tens * 10;

  let leftOver = 0;

  if (i < 100) {
    w[i] = w[tens * 10];
    single > 0 && (w[i] += " " + w[single]);
  }

  if (hundreds) {
    w[i] = w[hundreds] + " hundred";
    leftOver = i - hundreds * 100;
    if (leftOver) {
      w[i] += " and " + w[leftOver];
    }
  }
}

const t = w.slice(0, 10).map((i) => i + " thousand");
const tAnd = w.map((i) => " and " + i);
const tSp = w.map((i) => " " + i);

const getSaiyanLevel = (input) => {
  // Early return using pregenerated values or default value
  if (input > 9000) {
    return "it's over nine thousand!";
  }

  if (input < thousand) {
    return w[input];
  }

  // Generate thousands only
  const thousands = (input - (input % thousand)) / thousand;
  const th = thousands * thousand;
  const leftOver = input - th;

  if (leftOver) {
    const noHundeds = leftOver < 100;
    // Append the pregenerated value
    return t[thousands]+(noHundeds ? tAnd[leftOver] : tSp[leftOver]);
  }

  return t[thousands];
};

module.exports = getSaiyanLevel;
