const primes = new Array(60000).fill().map((_, i) => isPrime(i));

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const compute = (number) => {
  if (primes[number]) {
    return number * number - 17;
  }

  return Math.floor(Math.sqrt(number + 15));
};

module.exports = compute;
