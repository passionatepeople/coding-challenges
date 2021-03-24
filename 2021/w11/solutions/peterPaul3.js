const fromLegacyAPI = data => {
  const result = []
  processList(data, result, 0)
  return result
}
const processList = (list, result, indent) => {
  for (let length = list.length, i = 0; i < length; i += 1) {
    processItem(list[i], result, indent)
  }
}
const processItem = (item, result, indent) => {
  result.push(normalizeItem(item, indent))
  const children = getChildren(item)
  if (children) processList(children, result, indent + 50)
}
const normalizeItem = (item, indent) => ({
  name: getName(item),
  value: getValue(item),
  indent
})
const getName = item => item.name ?? item.title
const getValue = item => item.value ?? item.data
const getChildren = item => item.children ?? item.subdata
module.exports = fromLegacyAPI