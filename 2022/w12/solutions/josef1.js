const expandIt = (n) => {
  const r = [], s = n.toString()
  let d = 1

  for (let i = s.length - 1; i >= 0; i--) {
    s[i] > 0 && r.unshift(parseInt(s[i]) * d)
    d *= 10
  }

  return r.join(' + ')
};

module.exports = expandIt