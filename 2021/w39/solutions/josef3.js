module.exports = s => {
  let r = '', l = ''

  for (let i = 0; i < s.length; i++) {
    const c = s[i]

    if (c > 'Z' && c < 'a') {
      r += (l = c)
      continue
    }

    const cl = c.toLowerCase()
    if (cl === l) continue
    r += c
    l = cl
  }

  return r
}