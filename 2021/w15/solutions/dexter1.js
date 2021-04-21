const regex = /([A-Z0-9']*[a-z0-9']*)[-_]*/g
const fixCase = (input) => {
  let i = 0
  const result = input.replace(regex, (all, match) => {
    if (!match) return ''
    return `${
      !i++
      ? match[0].toLowerCase()
      : match[0].toUpperCase()
    }${
      match.substring(1).toLowerCase()
    }`
  })
  return result;
};

module.exports = fixCase;
