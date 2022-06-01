const iStandOut = (numbers) => {
  const first = numbers[0] % 2;
  const second = numbers[1] % 2;
  const third = numbers[2] % 2;

  if (first === second && first === third) {
    return numbers.find(x => x % 2 !== first);
  }

  if (first !== second && second === third) {
    return numbers[0];
  }

  if (first !== second && first === third) {
    return numbers[1];
  }

  if (first === second && first !== third) {
    return numbers[2];
  }

  return undefined;
};

module.exports = iStandOut;