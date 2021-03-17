module.exports = (input) => {
  const rankings = []
  for (let c of input.toLowerCase()) {
    let i = c.charCodeAt()
    rankings[i] = (rankings[i] || 0) + 1
  }
  return rankings.map((v, i) => ([String.fromCharCode(i), v])).filter(v => v).sort(([,a], [,b]) => a < b ? 1 : a > b ? -1 : 0).map(([c]) => c);
};
