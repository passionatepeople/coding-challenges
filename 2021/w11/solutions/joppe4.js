function name(item) {
  return item.title || item.name;
}

function value(item) {
  return item.value || item.data;
}

function children(item) {
  return item.children || item.subdata;
}

const parseData = (data, indent = 0, result = []) => {
  const max = data.length;

  for (let i = 0; i < max; i++) {
      const item = data[i];
      const ch = children(item);

      result.push({
          name: name(item),
          value: value(item),
          indent,
      });

      if (ch) {
          parseData(ch, indent + 50, result);
      }
  }

  return result;
};

module.exports = parseData;
