const imSpecial = (arr) => {
  const length = arr.length;
  const left = arr[0];
  if (left !== arr[1] && arr[1] === arr[2]) return left;

  const right = arr[length - 1];
  if (right !== arr[length - 2] && arr[length - 2] === arr[length - 3])
    return right;

  for (let i = 1, j = length - 2; i < length && j >= 0; i++, j--) {
    if (left !== arr[i]) return arr[i];
    if (right !== arr[j]) return arr[j];
  }

  return undefined;
};

module.exports = imSpecial;
