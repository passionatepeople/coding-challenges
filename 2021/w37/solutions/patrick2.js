const wouldEuclidBeHappy = (a, b, c) => {
  let longestSide = a
  
  if (b > longestSide) {
    longestSide = b
  }
  
  if (c > longestSide) {
    longestSide = c
  }

  return (longestSide < (a + b + c - longestSide))
}

module.exports = wouldEuclidBeHappy;
