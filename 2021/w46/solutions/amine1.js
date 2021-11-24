const wheatFromTheChaff = (data) => {
  const numbersArr = data.split(/([0-9]+)/).filter(Number);
  return numbersArr.length ? Math.max(...numbersArr) : undefined;
};

module.exports = wheatFromTheChaff;
