module.exports = ([a, b], count = 11) => {
  if (a % b === 0) return [a / b, 1];
  if (b % a === 0) return [1, b / a];

  while (--count > 1) {
    while (a % count === 0 && b % count === 0) {
      a /= count;
      b /= count;
    }
  }

  return [a, b];
};