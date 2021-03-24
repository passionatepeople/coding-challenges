const indent_value = 50;
const w = (input, indent, n) => {
  if (input) {
    const inputLen = input.length;
    let index = inputLen;
    while (index--) {
      w(
        input[index].children || input[index].subdata,
        indent + indent_value,
        n
      );
      n.push({
        indent,
        name: input[index].name || input[index].title,
        value: input[index].value || input[index].data,
      });
    }
    return n;
  }
};

module.exports = (d) => w(d, 0, []).reverse();
