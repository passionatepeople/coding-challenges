const whatsMyName = (url) => {
  const firstIndex = url.indexOf(".");
  const secondIndex = url.indexOf(".", firstIndex + 1);
  if (secondIndex !== -1) {
    return url.slice(firstIndex + 1, secondIndex);
  }
  if (url.startsWith("https")) {
    return url.slice(8, firstIndex);
  }
  return url.slice(7, firstIndex);
};

module.exports = whatsMyName;