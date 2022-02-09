const imSpecial = (str) => {
  chars = str.toLowerCase().split('')

  const count = chars.map(c => chars.filter(count => count === c).length)
  const answer = str.split('')[count.indexOf(1)]
  return answer ? answer : ''
};

module.exports = imSpecial;
