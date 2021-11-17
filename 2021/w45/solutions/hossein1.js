const maskIt = (string, number) => {
  let charCodeAt = String.prototype.charCodeAt,
    toLowerCase = String.prototype.toLowerCase,
    toUpperCase = String.prototype.toUpperCase,
    mask = number.toString(2),
    length = string.length,
    maskLength = mask.length,
    maskIndex = 0,
    result = "";

  for (let i = 0; i < length; i++) {
    let char = string[i],
      code = charCodeAt.call(char);

    if (code < 65 || code > 122 || (code > 90 && code < 97)) {
      result += char;
      continue;
    }

    if (mask[maskIndex] == "0") {
      result += char;
    } else {
      result += code > 96 ? toUpperCase.call(char) : toLowerCase.call(char);
    }

    if (++maskIndex == maskLength) {
      maskIndex = 0;
    }
  }
  return result;
};

module.exports = maskIt;
