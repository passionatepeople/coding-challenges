const zeroToNineteen = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

const tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const convertThousands = input => {
  const num = Math.floor(input / 1000);
  return input < 1000 ? convertHundreds(input) :
    input % 1000 === 0 ? `${zeroToNineteen[num]} thousand` :
    `${zeroToNineteen[num]} thousand ${convertHundreds(input % 1000)}`;
}

const convertHundreds = input => {
  const num = Math.floor(input / 100);
  return input < 100 ? `and ${convertBelowHundred(input)}` :
    input % 100 === 0 ? `${zeroToNineteen[num]} hundred` :
    `${zeroToNineteen[num]} hundred and ${convertBelowHundred(input % 100)}`;
}

const convertBelowHundred = input => {
  if (input < 20) return zeroToNineteen[input];
  const base = tens[Math.floor(input / 10) - 1];
  return input % 10 === 0 ? base : `${base} ${zeroToNineteen[input % 10]}`;
}

const getSaiyanLevel = (input) => {
  if (input > 9000) return "it's over nine thousand!"
  if (input < 100) return convertBelowHundred(input);
  
  return convertThousands(input);
};

module.exports = getSaiyanLevel;