const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const yes = (v) => v * v - 17;
const no = (v) => Math.floor(Math.sqrt(v + 15));

const compute = (o) => (isPrime(o) ? yes(o) : no(o));

module.exports = compute;
