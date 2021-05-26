const merge = (arr1, arr2, dir) => {
  if (dir === "asc") return [...arr1, ...arr2].sort((a, b) => a - b);
  if (dir === "desc") return [...arr1, ...arr2].sort((a, b) => a - b).reverse();
};

module.exports = merge;