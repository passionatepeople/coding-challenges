const imSpecial = (arr) => {
  const one = arr[0];
  const two = arr[1];

  return one === two ? arr.find(n => n !== one) : one === arr[2] ? two : one;
};

module.exports = imSpecial;
