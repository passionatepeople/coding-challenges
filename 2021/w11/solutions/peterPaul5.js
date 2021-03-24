const fromLegacyAPI = data => {
  const result = []
  processList(data, result, 0)
  return result
}
const processList = (list, result, indent) => {
  for (let length = list.length, i = 0; i < length; i += 1) {
    const [name, value, children] = Object.values(list[i]) // sorry 🙈
    result.push({ name, value, indent })
    if (children) processList(children, result, indent + 50)
  }
}
module.exports = fromLegacyAPI