const amIHollow = (numbers) => {
  const firstZero = numbers.indexOf(0);
  const lastZero = numbers.lastIndexOf(0);
  const length = numbers.length;

  return (
    length - lastZero === firstZero + 1 &&
    lastZero - firstZero >= 2 &&
    numbers[firstZero + 1] === 0 &&
    numbers[lastZero - 1] === 0
  );
};

module.exports = amIHollow;