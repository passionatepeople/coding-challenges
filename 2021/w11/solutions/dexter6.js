
module.exports = data => {
  const res = []
  const fn = (arr = [], indent = 0) => {
    arr.forEach(item => {
      res.push({
        name: item.name || item.title,
        value: item.value || item.data,
        indent,
      })
      fn(item.subdata || item.children, indent + 50)
    })
  }
  fn(data)
  return res
}
