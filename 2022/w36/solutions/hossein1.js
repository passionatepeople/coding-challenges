const simplify = ([a, b]) => {
  if (a % b == 0) return [a / b, 1];
  if (b % a == 0) return [1, b / a];

  let x = b, y = a % b;
  while (y) y = x % (x = y);
  
  return [a / x, b / x];
};

module.exports = simplify;