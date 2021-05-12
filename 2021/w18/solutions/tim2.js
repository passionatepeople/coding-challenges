// Pregenerate 1...999
const writtenNumbers = [
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
writtenNumbers[30] = "thirty";
writtenNumbers[40] = "forty";
writtenNumbers[50] = "fifty";
writtenNumbers[60] = "sixty";
writtenNumbers[70] = "seventy";
writtenNumbers[80] = "eighty";
writtenNumbers[90] = "ninety";
writtenNumbers[100] = "hundred";

let i = 20;
while (i < 1000) {
  i++;
  const hundreds = Math.floor(i / 100);
  const tens = Math.floor((i - hundreds * 100) / 10);
  const single = i - hundreds * 100 - tens * 10;

  let leftOver = 0;

  if (i < 100) {
    writtenNumbers[i] = writtenNumbers[tens * 10];
    single > 0 && (writtenNumbers[i] += " " + writtenNumbers[single]);
  }

  if (hundreds) {
    writtenNumbers[i] = writtenNumbers[hundreds] + " hundred";
    leftOver = i - hundreds * 100;
    if (leftOver) {
      writtenNumbers[i] += " and " + writtenNumbers[leftOver];
    }
  }
}

const writtenThousands = writtenNumbers.slice(0,10).map(i => i+' thousand');
const writtenAnd = writtenNumbers.map(i => ' and '+i);

const getSaiyanLevel = (input) => {
  // Early return using pregenerated values or default value
  if (input > 9000) {
    return "it's over nine thousand!";
  }

  if(input < 1000) {
    return writtenNumbers[input];
  }

  // Generate thousands only
  const thousands = (input - input % 1000) / 1000;
  const th = thousands * 1000;
  const leftOver = input - th;

  let text = writtenThousands[thousands];
  if (leftOver) {
    const noHundeds = (input - th) < 100;
    // Append the pregenerated value
    text += noHundeds ? writtenAnd[leftOver] : " " + writtenNumbers[leftOver];
  }

  return text;
};

module.exports = getSaiyanLevel;
