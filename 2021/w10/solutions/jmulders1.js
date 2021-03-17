const r = (s) => new RegExp(s.replace(/[^a-zA-Z0-9]/g, '\\$&'), 'gi');
const c = (s) => s.charCodeAt(0);

module.exports = (i) =>
  [...new Set(i.toLowerCase())].sort(
    (a, b) => i.match(r(b)).length - i.match(r(a)).length || c(a) - c(b)
  );