
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

const getWrittenThousands = (input) => {
  return (
    input > 9000 ? "it's over nine thousand!" :
    input % 1000 === 0 ? `${zeroToNineteen[input / 1000]} thousand` :
    input % 1000 < 100 ? `${zeroToNineteen[input / 1000 >> 0]} thousand and ${cache.get(input % 1000)}` :
    `${zeroToNineteen[input / 1000 >> 0]} thousand ${cache.get(input % 1000)}`
  );
};

const getWrittenHundreds = input => {
  return input < 100 ? convertBelowHundred(input) : convertHundreds(input);
}

// only allowed to cache < 1000 according to the rules :(
const cache = new Map();
for (let i = 0; i < 1000; i++) {
  cache.set(i, getWrittenHundreds(i));
}

const getSaiyanLevel = (input) => {
  return input < 1000 ? cache.get(input) : getWrittenThousands(input);
};

module.exports = getSaiyanLevel;
