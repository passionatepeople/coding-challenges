const permutateMe = (string) => {
  const permArr = []; const usedChars = [];

  const permute = (input) => {
    let i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (!input.length) {
        permArr.push(usedChars.slice().join(''));
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  };

  return [...new Set(permute(string.split('')))]
};

module.exports = permutateMe;
