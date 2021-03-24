w = (a, i = 0, n = new Set()) => {
  a.forEach((a) => {
    n.add({ name: a.name || a.title, value: a.value || a.data, indent: i })
    c = a.children || a.subdata
    c && w(c, i + 50, n)
  })
  return n
};

module.exports = d => [...(w(d))]
