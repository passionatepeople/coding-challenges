module.exports = (input, i=0, r=/([A-Z0-9']*[a-z0-9']*)[-_]*/g) => input.replace(r, (_, match) => match ? `${
  !i++
  ? match[0].toLowerCase()
  : match[0].toUpperCase()
}${
  match.substring(1).toLowerCase()
}` : ''
);
