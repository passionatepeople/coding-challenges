const hashedAllTheWay = code =>
  code
    .split('')
    .reduce((hash, c) => hash+c.charCodeAt(0).toString(16), '' )
    .split('')
    .reduce((hash, c)=> { const d = parseInt(c); return isNaN(d) ? hash : hash+d},0)

module.exports = hashedAllTheWay;