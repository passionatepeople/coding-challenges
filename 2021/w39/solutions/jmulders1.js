const removeDupes = (string) => {
  let res = '';
  
  const stringLc = string.toLowerCase();
  const { length } = stringLc;
  
  let cur, curSequence, isValidChar, i;

  for (i = 0; i < length; i++) {
    cur = stringLc[i];

    if (cur === curSequence && isValidChar) {
      continue;
    }

    curSequence = cur;
    isValidChar = cur >= 'a';
    
    res += string[i];
  }

  return res;
};

module.exports = removeDupes;