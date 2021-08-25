 function buildPyramid (floors, character='*') {
  let result = [], maxStars = floors * 2 - 1, i = 1, currStar, diff, pad;

  while (i < floors + 1) {
    currStar = i * 2 - 1; diff = (maxStars - currStar)/2; pad =' '.repeat(diff);
    result.push(pad + character.repeat(currStar) + pad);
    i++;
  }
  return result;
}

module.exports = buildPyramid;