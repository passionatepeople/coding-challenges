const imSpecial = (arr) => {
  const length = arr.length;
  const num = arr[0];
  if (num !== arr[1] && arr[1] === arr[2]) return num;
  for (let i = 1; i < length; i++) {
    if (num !== arr[i]) return arr[i];
  }

  return undefined;
};

module.exports = imSpecial;
