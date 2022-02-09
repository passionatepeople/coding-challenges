const imSpecial = (str) => {
  const lowerCaseString = str.toLowerCase();
  const charCounts = {};
  for(let i = 0; i < str.length; i++){
    charCounts[lowerCaseString[i]] = charCounts[lowerCaseString[i]] ? charCounts[lowerCaseString[i]] + str[i] : str[i];
  }
  for(const characters of Object.values(charCounts)){
    if(characters.length === 1){
      return characters[0];
    }
  }
  return "";
};

module.exports = imSpecial;
