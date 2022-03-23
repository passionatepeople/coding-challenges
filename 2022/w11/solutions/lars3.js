const truncIt = (arr) => {
  const length = arr.length;
  const initial = arr[0];
  let result = (min = max = initial);

  if (!length || length < 3) {
    return 0;
  }

  for (let i = 1; i < length; i++) {
    const number = arr[i];
    if (min > number) {
      min = number;
    }

    if (max < number) {
      max = number;
    }

    result += number;
  }

  return result - min - max;
};

module.exports = truncIt;
