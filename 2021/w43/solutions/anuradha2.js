module.exports = n => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const sentenceArr = n.toLowerCase();
  
  for (let i = 0; i < alphabet.length; i++) {
    if (sentenceArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}