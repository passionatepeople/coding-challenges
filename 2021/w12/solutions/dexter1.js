const manipulateNumber = (A) => {
  const B = parseInt(A.toString().split("").reverse().join(""));
  const C = A - B;
  const D =
    Math.abs(C)
      .toString()
      .split("")
      .map((v) => parseInt(v))
      .reduce((sum, value) => sum + value, 0) * Math.sign(C);
  return D;
};

module.exports = manipulateNumber;
