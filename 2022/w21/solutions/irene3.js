const iStandOut = (numbers) => {
  const first = numbers[0] % 2;
  const second = numbers[1] % 2;
  const third = numbers[2] % 2;

  return (first === second && second === third) ? numbers.find(x => x % 2 !== first) :
    second === third ? numbers[0] : first === third ? numbers[1] : numbers[2]
};

module.exports = iStandOut;