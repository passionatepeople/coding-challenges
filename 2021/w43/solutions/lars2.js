const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const indexOf = String.prototype.indexOf
const toLowerCase = String.prototype.toLowerCase

const hasItAll = (s) => {
  let sentence = toLowerCase.call(s)
  for (let i = 0; i < 26; i++) {
    if(indexOf.call(sentence, alphabet[i]) < 0){
      return false;
    }
  }

  return true;
};

module.exports = hasItAll;
