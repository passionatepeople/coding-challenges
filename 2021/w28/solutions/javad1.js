const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 179,
  181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
];

const largestCommonDivisor = (num1, num2, lastCandidate = 1) => {
  if (num1 === num2) return num1;
  let candidate = 1;
  for (let i = 0; i < primeNumbers.length; i++) {
    if (num1 % primeNumbers[i] === 0 && num2 % primeNumbers[i] === 0) {
      candidate = primeNumbers[i];
      break;
    }
  }
  if (candidate === 1) return lastCandidate;
  let nextCandidate = lastCandidate * candidate;
  return largestCommonDivisor(
    num1 / candidate,
    num2 / candidate,
    nextCandidate
  );
};

module.exports = largestCommonDivisor;
