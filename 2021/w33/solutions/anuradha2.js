function buildPyramid (floors, character='*') {
  const result = [], maxStars = floors * 2 - 1;
  result[floors - 1] = character.repeat(maxStars);
 
  for (let i = floors - 1; i > 0; i--) {
    let currStar = i * 2 - 1, diff = (maxStars - currStar)/2;
    result[i-1] = ' '.repeat(diff) + character.repeat(currStar) + ' '.repeat(diff);
  }
  return result;
};

module.exports = buildPyramid;