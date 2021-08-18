const imSpecial = (arr) => {
  let first = arr[0];
  let idx = 1;
  if (first !== arr[1]) {
    return first === arr[2] ? arr[1] : first;
  }
  do {
    ++idx;
  } while(first === arr[idx]);
  return arr[idx];
};

module.exports = imSpecial;
