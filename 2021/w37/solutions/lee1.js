const wouldEuclidBeHappy = (a, b, c) => {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  }

  return false;
};

module.exports = wouldEuclidBeHappy;
