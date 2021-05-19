const getIsPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const compute = (number) =>
  getIsPrime(number) ? number * number - 17 : parseInt(Math.sqrt(number + 15));

module.exports = compute;
