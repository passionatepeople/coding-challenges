const INDENT_PIXELS = 50;

const flatten = (list, indent = 0) =>
  list ?
  list.reduce(
    (flatArray, listItem) =>
      flatArray.concat(
        [
          {
            name: listItem.name || listItem.title,
            value: listItem.value || listItem.data,
            indent,
          },
        ],
        flatten(listItem.children || listItem.subdata, indent + INDENT_PIXELS)
      ),
    []
  ) : []

module.exports = list => flatten(list);
