const maskIt = (string, number) => {
  let charCodeAt = String.prototype.charCodeAt,
    length = string.length,
    maskLength = Math.floor(Math.log2(number)),
    maskIndex = maskLength,
    result = "",
    // prettier-ignore
    lowers = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    // prettier-ignore
    uppers = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for (let i = 0; i < length; i++) {
    let char = string[i],
      code = charCodeAt.call(char);

    if (code < 65 || code > 122 || (code > 90 && code < 97)) {
      result += char;
      continue;
    }

    if (number & (1 << maskIndex)) {
      result += code > 96 ? uppers[code % 32] : lowers[code % 32];
    } else {
      result += char;
    }

    if (--maskIndex < 0) {
      maskIndex = maskLength;
    }
  }
  return result;
};

module.exports = maskIt;
