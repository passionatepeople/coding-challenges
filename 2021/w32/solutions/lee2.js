const imSpecial = (arr) => {
  const init = arr[0];
  let idx = arr.length - 1;
  while (idx) {
    if (init === arr[idx]) {
      idx--;
      continue;
    } else {
      return init === arr[idx - 1] ? arr[idx] : init;
    }
  }
};

module.exports = imSpecial;
