module.exports = n => {
  const a = n.toString()
  return Number(a.replace(/0/g, '').padEnd(a.length, '0'))
}