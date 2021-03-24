const parseData = (data) => {
  function parse(arr, indent = 0) {
      return arr.reduce((acc, item) => {
          return [
              ...acc,
              {
                  name: item.title || item.name,
                  value: item.value || item.data,
                  indent,
              },
              ...parse(item.children || item.subdata || [], indent + 50),
          ];
      }, []);
  }

  return parse(data);
};

module.exports = parseData;