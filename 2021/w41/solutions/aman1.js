module.exports = n => {
    let nn = (n / 10) >>> 0
    return (n * (n + 1)) / 2 - ((nn * (nn + 1)) / 2) * 10
  }
  