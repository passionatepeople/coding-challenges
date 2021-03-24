module.exports = processArray = (array, indent = 0) =>
  array
    ? array.reduce(
        (result, item) => [
          ...result,
          {
            name: item.name || item.title,
            value: item.value || item.data,
            indent
          },
          ...processArray(item.children || item.subdata, indent + 50)
        ],
        []
      )
    : [];
