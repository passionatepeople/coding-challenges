const removeDupes = (string) => {
  let noDups = string[0];
  for (let i = 1; i < string.length; i++) {
    if (
      !/[a-zA-Z]/.test(string[i]) ||
      noDups[noDups.length-1].toLowerCase() !== string[i].toLowerCase()
    ) {
      noDups += string[i];
    }
  }

  return noDups;
};

module.exports = removeDupes;
