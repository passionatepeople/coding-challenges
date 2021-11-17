const { toString } = Number.prototype;
const { charCodeAt } = String.prototype;

const maskIt = (string, number) => {
  const mask = toString.call(number, 2);
  let maskIndex = 0;
  let res = "";
  for (let i = 0; i < string.length; i++) {
    let shouldSwap = mask[maskIndex % mask.length] === "1";
    let code = charCodeAt.call(string[i]);

    if (code > 64 && code < 91) {
      res += shouldSwap ? String.fromCharCode(code + 32) : string[i];
      maskIndex++;
      continue;
    }

    if (code > 96 && code < 123) {
      res += shouldSwap ? String.fromCharCode(code - 32) : string[i];
      maskIndex++;
      continue;
    }
    res += string[i];
  }

  return res;
};

module.exports = maskIt;
