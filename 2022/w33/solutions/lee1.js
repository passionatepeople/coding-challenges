const sevenAteNine = (numbers) => {
  let res = numbers;
  while (res.indexOf("797") !== -1) {
    const find = res.indexOf("797") + 1;
    res = res.slice(0, find) + res.slice(find + 1);
  }

  return res;
};

module.exports = sevenAteNine;