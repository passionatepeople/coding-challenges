const tillHun = [
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
tillHun[30] = "thirty";
tillHun[40] = "forty";
tillHun[50] = "fifty";
tillHun[60] = "sixty";
tillHun[70] = "seventy";
tillHun[80] = "eighty";
tillHun[90] = "ninety";
tillHun[100] = "hundred";

let i = 21;
while (i < 1000) {
  const hundreds = ~~(i / 100);
  const tens = ~~((i - hundreds * 100) / 10);
  const single = i - hundreds * 100 - tens * 10;

  let leftOver = 0;

  if (i < 100) {
    tillHun[i] = tillHun[tens * 10];
    single > 0 && (tillHun[i] += "-" + tillHun[single]);
  }

  if (hundreds) {
    tillHun[i] = tillHun[hundreds] + " hundred";
    leftOver = i - hundreds * 100;
    if (leftOver) {
      tillHun[i] += " " + tillHun[leftOver];
    }
  }
  i++;
}

const thousandList = tillHun.slice(0, 1000).map((i) => i + " thousand");
const thousandSpaceList = thousandList.map((i) => i + " ");
const thousandMinusList = thousandList.map((i) => "minus " + i);
const thousandMinusSpaceList = thousandSpaceList.map((i) => "minus " + i);
const tillHunSp = tillHun.map((i) => "" + i);
const tillHunMinus = tillHun.map((i) => "minus " + i);

const spellItOut = (input) => {
  const absInput = Math.abs(input);
  if (absInput < 1000) {
    if (input < 0) {
      return tillHunMinus[absInput];
    }
    return tillHun[input];
  }

  const numThousands = (absInput - (absInput % 1000)) / 1000;
  const thousands = numThousands * 1000;
  const leftOver = absInput - thousands;
  const textThousands =
    input < 0
      ? leftOver
        ? thousandMinusSpaceList[numThousands]
        : thousandMinusList[numThousands]
      : leftOver
      ? thousandSpaceList[numThousands]
      : thousandList[numThousands];

  if (leftOver) {
    return textThousands + tillHunSp[leftOver];
  }

  return textThousands;
};

module.exports = spellItOut;