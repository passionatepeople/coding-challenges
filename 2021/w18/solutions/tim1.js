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
  const thousands = Math.floor(i / 1000);
  const hundreds = Math.floor((i - thousands * 1000) / 100);
  const tens = Math.floor((i - thousands * 1000 - hundreds * 100) / 10);
  const single = i - thousands * 1000 - hundreds * 100 - tens * 10;
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

const getSaiyanLevel = (input) => {
  // Early return using pregenerated values or default value
  if (input > 9000 || input < 1000) {
    return writtenNumbers[input] || "it's over nine thousand!";
  }

  // Generate thousands only
  const thousands = Math.floor(input / 1000);
  const leftOver = (input - thousands * 1000);

  let text = writtenNumbers[thousands] + " thousand";
  if (leftOver) {
    const hundreds = Math.floor((input - thousands * 1000) / 100);
    if (!hundreds) {
      text += " and";
    }
    // Append the pregenerated value
    text += " " + writtenNumbers[leftOver];
  }

  return text;
};

module.exports = getSaiyanLevel;
