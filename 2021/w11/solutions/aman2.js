const parseData = (data, indent = 0, arr = []) => {
  for (let j = 0, len = data.length; j < len; j++) {
    const d = data[j];
    const { name = d.title, value = d.data, children = d.subdata } = d;
    arr.push({ name, indent, value });
    if (children && children.length > 0) {
      parseData(children, indent + 50, arr);
    }
  }
  return arr;
};

module.exports = parseData;
