const imSpecial = (str) => {
  for(let i = 0; i < str.length; i++){
    if(!(new RegExp(str[i], 'gi')).test(str.substring(0, i) + str.substring(i+1))){
      return str[i];
    }
  }
  return "";
};

module.exports = imSpecial;
