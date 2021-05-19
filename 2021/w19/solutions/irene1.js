function isPrime(num) {
  if (num <= 3) return num > 1;
  
  if ((num % 2 === 0) || (num % 3 === 0)) return false;
  
  let count = 5;  
  while (count * count <= num) {
    if (num % count === 0 || num % (count + 2) === 0) return false;
    count += 6;
  }
  
  return true;
}

const compute = (number) => {
  return isPrime(number) ? number * number - 17 : Math.floor((number + 15) ** 0.5);
};

module.exports = compute;