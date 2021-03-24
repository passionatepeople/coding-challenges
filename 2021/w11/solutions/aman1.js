const parseData = (data, i = 0, arr = []) => {
  for (let j = 0, len = data.length; j < len; j++) {
    const d = data[j];
    const { name = d.title, value = d.data, children = d.subdata } = d;
    arr.push({ name, indent: i, value });
    if (children) {
      parseData(children, i + 50, arr);
    }
  }
  return arr;
};

module.exports = parseData;
