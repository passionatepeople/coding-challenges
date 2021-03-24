function t (n, i = 0, r = []) {
  if (!n.subdata || !n.children) {
    r.push({
      name: n.name || n.title,
      indent: i * 50,
      value: n.value || n.data
    })
  }
  ;(n.children || n.subdata || []).reduce(
    (a, c) => a.concat(t(c, i + 1, r)),
    []
  )
  return r
}

const parseData = d => d.reduce((a, c) => a.concat(t(c)), [])

module.exports = parseData
