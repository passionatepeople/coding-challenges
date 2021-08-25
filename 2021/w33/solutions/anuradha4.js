module.exports = (floors, character='*') => {
  let result = [], maxStars = floors * 2 - 1, i = 1, currStar, diff, pad;

  while (i < floors+1) {
    currStar = i * 2 - 1; diff = (maxStars - currStar)/2; pad =' '.repeat(diff);
    result[i-1] = pad + character.repeat(currStar) + pad;
    i++;
  }
  return result;
}