const parseData = (data, indent = 0, arr = []) => {
  for (let j = 0, len = data.length; j < len; j++) {
    const d = Object.entries(data[j]);
    arr.push({name: d[0][1], indent, value: d[1][1]});
    const children = d[2] && d[2][1];
    if (children && children.length > 0) {
      parseData(children, indent + 50, arr);
    }
  }
  return arr;
};

module.exports = parseData;
