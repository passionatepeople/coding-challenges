const parseData = (tree) => {
  let result = [];
  const iterator = (node, indent = 0) => {
    let l = node.length
    if (l) {
      for (let i = 0; i < l; i++) {
        iterator(node[i]);
      }
    } else {
      let n = Object.values(node)
      result.push({
        name: n[0],
        value: n[1],
        indent,
      });
      let children = n[2];
      if (children) {
        let cl = children.length
        for (let j = 0; j < cl; j++) {
          iterator(children[j], indent + 50);
        }
      }
    }
  };
  iterator(tree);
  return result;
};
module.exports = parseData;

