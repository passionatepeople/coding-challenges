const getSaiyanLevel = (input) => {
  if (input > 9000) return "it's over nine thousand!";
  if (input < 100) return e1[input];
  const head = 0 | (input / 100);
  const hundreds = head % 10;
  const thousands = 0 | (head / 10);
  const tail = input % 100;
  return thousands
    ? tail
      ? hundreds
        ? e3[thousands] + " " + e2[hundreds] + " and " + e1[tail]
        : e3[thousands] + " and " + e1[tail]
      : hundreds
      ? e3[thousands] + " " + e2[hundreds]
      : e3[thousands]
    : tail
    ? e2[hundreds] + " and " + e1[tail]
    : e2[hundreds];
};

const e1 = [
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
];
e1.push("twenty");
for (let i = 1; i < 10; i++) e1.push("twenty " + e1[i]);
e1.push("thirty");
for (let i = 1; i < 10; i++) e1.push("thirty " + e1[i]);
e1.push("forty");
for (let i = 1; i < 10; i++) e1.push("forty " + e1[i]);
e1.push("fifty");
for (let i = 1; i < 10; i++) e1.push("fifty " + e1[i]);
e1.push("sixty");
for (let i = 1; i < 10; i++) e1.push("sixty " + e1[i]);
e1.push("seventy");
for (let i = 1; i < 10; i++) e1.push("seventy " + e1[i]);
e1.push("eighty");
for (let i = 1; i < 10; i++) e1.push("eighty " + e1[i]);
e1.push("ninety");
for (let i = 1; i < 10; i++) e1.push("ninety " + e1[i]);

const e2 = [undefined];
for (let i = 1; i < 10; i++) e2.push(e1[i] + " hundred");

const e3 = [undefined];
for (let i = 1; i < 10; i++) e3.push(e1[i] + " thousand");

module.exports = getSaiyanLevel;