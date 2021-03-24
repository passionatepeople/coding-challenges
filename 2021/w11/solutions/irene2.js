const parseData = (data, indent = 0, res = []) => {
  data.forEach(d => {
    const name = d.name ?? d.title;
    const value = d.value ?? d.data;
    res.push({ name, indent, value });
    const children = d.children ?? d.subdata;
    if (children !== undefined) {
      parseData(children, indent + 50, res);
    }
  });
  return res;
};

module.exports = parseData;