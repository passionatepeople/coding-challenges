const charCodeAt = String.prototype.charCodeAt;
const whatsMyName = (url) => {
  let i = 7,
    code = charCodeAt.call(url, 7);

  if (code == 47) {
    i = 8;
    code = charCodeAt.call(url, 8);
  }

  if (code == 119 && charCodeAt.call(url, i + 3) == 46) {
    i += 4;
    code = charCodeAt.call(url, i);
  }

  let startIndex = i;
  while (code != 46) {
    i += 1;
    code = charCodeAt.call(url, i);
  }

  return url.slice(startIndex, i);
};

module.exports = whatsMyName;