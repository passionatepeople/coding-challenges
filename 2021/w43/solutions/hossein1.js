const hasItAll = (n) => {
  let length = n.length,
    i = 0,
    code,
    collection = [];

  for (; i < length; ++i) {
    code = n.charCodeAt(i);
    if (64 < code && 0 > collection.indexOf((code = code % 32))) {
      collection.push(code);
    }
  }

  return 26 == collection.length;
};

module.exports = hasItAll;
