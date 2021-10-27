const add = (a, b) => {
  let sum = "",
    remainder = 0,
    padCount = 0;
  const nA = a.split("").reduce((r, c) => c + r, "");
  const nB = b.split("").reduce((r, c) => c + r, "");
  for (let i = 0; i < Math.max(nA.length, nB.length); i++) {
    const res = (+nA[i] || 0) + (+nB[i] || 0) + remainder;
    sum = (res % 10) + sum;
    remainder = (res / 10) | 0;
  }
  if (remainder > 0) sum = remainder + sum;
  while (sum[padCount] === "0") padCount++;
  sum = sum.slice(padCount, sum.length);
  return sum;
};

module.exports = add;