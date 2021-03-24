const getResult = (node, indent) => ({
  name: node.title || node.name,
  value: node.value || node.data || 0,
  indent,
});

const parseData = (tree) => {
  let result = [];

  const iterator = (node, indent = 0) => {
    if (node.constructor === Array) {
      for (let i = 0; i < node.length; i++) {
        iterator(node[i]);
      }
    } else {
      result.push(getResult(node, indent));

      const children = node.children || node.subdata;

      if (children) {
        for (let j = 0; j < children.length; j++) {
          iterator(children[j], indent + 50);
        }
      }
    }
  };

  iterator(tree);

  return result;
};

module.exports = parseData;
