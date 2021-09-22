const wouldEuclidBeHappy = (a, b, c) => {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  } else {
    return true;
  }
};

module.exports = wouldEuclidBeHappy;

