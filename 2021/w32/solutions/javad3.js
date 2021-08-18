const imSpecial = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return arr[i];
  }

  return undefined;
};

module.exports = imSpecial;
