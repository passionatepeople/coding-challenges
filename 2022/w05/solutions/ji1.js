const imSpecial = (str) => {
  let arr = [...str];
  let word = arr[0];
  let result = "";

  const f = () => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].toLowerCase() === word.toLowerCase()) {
        arr = arr.filter((x) => x.toLowerCase() !== word.toLowerCase());
        word = arr[0];
        if (arr.length === 1) {
          result = word;
          return;
        }
        f();
      }
      if (
        i === arr.length - 1 &&
        arr[arr.length - 1].toLowerCase() !== word.toLowerCase()
      ) {
        result = word;
        return;
      }
    }
  };

  f();

  return result;
};

module.exports = imSpecial;