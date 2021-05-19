const isPrime = (num) => {
  let s = Math.sqrt(num);

  for(let i = 2; i <= s; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

const compute = (number) => {
  if (isPrime(number)) {
    return Math.pow(number, 2) - 17;
  }

  return Math.floor(Math.sqrt(number + 15));
};

module.exports = compute;

