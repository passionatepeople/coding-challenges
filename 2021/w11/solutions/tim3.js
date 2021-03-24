const indent_value = 50;
const w = (input, indent, n) => {
  if (input) {
    const inputLen = input.length;
    let index = 0;
    while (index < inputLen) {
      n.push({
        indent,
        name: input[index].name || input[index].title,
        value: input[index].value || input[index].data,
      });
      w(
        input[index].children || input[index].subdata,
        indent + indent_value,
        n
      );
      index++;
    }
    return n;
  }
};

module.exports = (d) => w(d, 0, [], 0);
