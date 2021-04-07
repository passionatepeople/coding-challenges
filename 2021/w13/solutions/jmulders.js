module.exports = (int) =>
  ((int >> 24) & 255) +
  '.' +
  ((int >> 16) & 255) +
  '.' +
  ((int >> 8) & 255) +
  '.' +
  (int & 255);