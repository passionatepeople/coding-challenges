const rev = (number, stringRev = "") => {
  for (var i = number.length - 1; i >= 0; i--) {
    stringRev += number[i];
  }
  return +stringRev;
};

module.exports = (n) => {
  const diff = n - rev("" + n);
  if (!diff) return 0;
  let stringDiff = "" + diff;
  let result = 0;
  for (var i = stringDiff.length - 1; i >= 0; i--) {
    if (stringDiff[i] !== "-") {
      result += +stringDiff[i];
    }
  }

  return stringDiff[0] === "-" ? -result : result;
};
