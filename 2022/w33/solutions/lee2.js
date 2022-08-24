const sevenAteNine = (numbers) => {
  let res = numbers;
  find = 0;
  while (res.indexOf("797", find) !== -1) {
    find = res.indexOf("797", find) + 1;
    res = res.slice(0, find) + res.slice(find + 1);
  }

  return res;
};

module.exports = sevenAteNine;