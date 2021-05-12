const zeroToNineteen = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

const tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const convertBelowHundred = input => {
  if (input < 20) return zeroToNineteen[input];
  const base = tens[Math.floor(input / 10) - 1];
  const single = input % 10;
  return single === 0 ? base : `${base} ${zeroToNineteen[single]}`;
}

const getSaiyanLevel = (input) => {
  if (input > 9000) return "it's over nine thousand!"
  if (input < 100) return convertBelowHundred(input);

  const thousands = Math.floor(input / 1000);
  const hundreds = Math.floor(input % 1000 / 100);
  const remain = input - thousands * 1000 - hundreds * 100;

  let res = "";
  if (thousands !== 0) res = res.concat(`${zeroToNineteen[thousands]} thousand `);
  if (hundreds !== 0) res = res.concat(`${zeroToNineteen[hundreds]} hundred `);
  if (remain !== 0) res = res.concat(`and ${convertBelowHundred(remain)}`);

  return res.trim();
};

module.exports = getSaiyanLevel;