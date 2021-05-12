
const zeroToNineteen = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

const convertHundreds = input => {
  return (
    input % 100 === 0 ? `${zeroToNineteen[input / 100 >> 0]} hundred` :
    input < 100 ? convertTens(input) :
    `${zeroToNineteen[input / 100 >> 0]} hundred ${convertTens(input % 100)}`
  );
};

const convertTens = input => {
  return input === 0 ? '' : `and ${convertBelowHundred(input)}`;
};

const convertBelowHundred = input => {
  return (
    input < 20 ? zeroToNineteen[input] :
    input % 10 === 0 ? tens[input / 10 >> 0] :
    `${tens[input / 10 >> 0]} ${zeroToNineteen[input % 10]}`
  );
};

const getSaiyanLevel = (input) => {
  return (
    input > 9000 ? "it's over nine thousand!" :
    input < 100 ? convertBelowHundred(input) :
    input < 1000 ? convertHundreds(input) :
    input % 1000 === 0 ? `${zeroToNineteen[input / 1000]} thousand` :
    `${zeroToNineteen[input / 1000 >> 0]} thousand ${convertHundreds(input % 1000)}`
  );
};

module.exports = getSaiyanLevel;
