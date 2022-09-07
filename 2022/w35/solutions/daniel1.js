const txtEditor = (text) => {
  let r = ""
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "#" || text[i + 2] === "#" && text[i + 3] === "#" || text[i + 1] === "#") continue
    r += text[i]
  }
  return r
}

module.exports = txtEditor;