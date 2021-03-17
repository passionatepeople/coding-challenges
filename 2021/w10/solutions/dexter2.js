module.exports = input => input
    .toLowerCase()
    .split('')
    .reduce((acc, v) => {
        const i = v.charCodeAt()
        acc[i] = (acc[i] || 0) + 1
        return acc
    }, [])
    .map((v, i) => ([i, v]))
    .filter(v => v)
    .sort(([,a], [,b]) => a < b ? 1 : a > b ? -1 : 0)
    .map(([c]) => String.fromCharCode(c));
