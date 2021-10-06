const removeDupes = (string) => {
  const lowerString = string.toLowerCase();
        const indexArray = [];
        [...lowerString].forEach((l, index) => {
          if (index <= 0) {
            return;
          }

          if (lowerString[index - 1] === l && l != l.toUpperCase()) {
            indexArray.push(index);
          }
        });
        indexArray.sort((a, b) => a - b);

        const workingString = [...string];

        while (indexArray.length) {
          workingString.splice(indexArray.pop(), 1);
        }

        return workingString.join("");
};

module.exports = removeDupes;
