const parseData = (arr, indent = 0) => {
  return arr.reduce((acc, item) => {
      return [
          ...acc,
          {
              name: item.title || item.name,
              value: item.value || item.data,
              indent,
          },
          ...parseData(item.children || item.subdata || [], indent + 50),
      ];
  }, []);
};

module.exports = parseData;
