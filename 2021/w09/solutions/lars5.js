const h = Array(256).fill().map((_, i) => {
  const e = i.toString(16);
  return (e.length == 1 ? "0" + e : e).toUpperCase();
})
const c2h = (c) => c <= 0 ? '00' : c >= 255 ? 'FF' : h[c]
module.exports = (r, g, b) => "#" + c2h(r) + c2h(g) + c2h(b);