function* genData(data, indent) {
  indent = indent || 0
  // Yields all items in data recursivly
  for ({ title, name, value, data, children, subdata } of data) {
    yield {
      name: name || title,
      value: value || data,
      indent
    }
    if (children || subdata) {
      for (child of genData(children || subdata, indent + 50)) {
        yield child
      }
    }
  }
}

module.exports = data => Array.from(genData(data));
